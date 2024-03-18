  <script>
          window.addEventListener('widgetLoaded', function(event) {
            if (event.detail == 'MyCustomWidget') {
              var letterContainers = document.getElementsByClassName('letter-container');
              console.log('Found', letterContainers.length, 'letter containers');
        
              for (var i = 0; i < letterContainers.length; i++) {
                (function(index) {
                  var letterContainer = letterContainers[index];
                  var letterText = letterContainer.querySelector('.letter-text');
                  var quillContainer = letterContainer.querySelector('.quill-container');
                  var quillEditor = new Quill(quillContainer.querySelector('.quill-editor'), {
                    theme: 'snow'
                  });
                  var editSaveBtn = letterContainer.querySelector('.edit-save-btn');
        
                  quillEditor.root.innerHTML = letterText.innerHTML;
        
                  console.log('Quill editor initialized for letter container', index);
        
                  editSaveBtn.addEventListener('click', function() {
                    console.log('Edit button clicked for letter container', index);
        
                    if (quillContainer.style.display === 'none') {
                      console.log('Showing Quill editor for letter container', index);
                      letterText.style.display = 'none';
                      quillContainer.style.display = 'block';
                      quillEditor.focus();
                      editSaveBtn.textContent = 'Save';
                    } else {
                      console.log('Saving letter for letter container', index);
                      var updatedLetter = quillEditor.root.innerHTML;
                      letterText.innerHTML = updatedLetter;
                      letterText.style.display = 'block';
                      quillContainer.style.display = 'none';
                      editSaveBtn.textContent = 'Edit';

                      var pledgeId = editSaveBtn.getAttribute('data-pledgeid');
        
                      // Call your Power Automate endpoint to save the updated letter
                      saveLetterToPowerAutomate(updatedLetter, pledgeId);
                    }
                  });
                })(i);
              }
            }
          });
        
          function saveLetterToPowerAutomate(updatedLetter, pledgeId) {
            // Your existing Power Automate code
          
            // Replace with your Power Automate endpoint URL
            var url = 'https://prod-33.westus.logic.azure.com:443/workflows/c1c443e7d93148f4b7996d09c94b6239/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZFLJvIWC21RxyuroHq1QniUwGX2HCuuWwBLg83jhT7c';
        
            // Create the payload with the necessary data
            var payload = {
              letter: updatedLetter,
              pledgeId: pledgeId
            // Add any other required data
            };
        
            // Make the API call to Power Automate
            fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            })
            .then(function(response) {
              // Handle the response from Power Automate
              if (response.ok) {
                console.log('Letter updated successfully');
              } else {
                console.error('Failed to update letter');
              }
            })
            .catch(function(error) {
              console.error('Error:', error);
            });
          }
        </script>
