# Widget-CSS
A collection of all custom CSS for Perimeter Church's Ministry Platform widgets

## Content Delivery Network (CDN)
All files are hosted at https://www.jsdelivr.com/ 

## Contribution Guidelines
  1. Create a folder named for each ministry platform widget that needs custom CSS
  2. Create a file named for each rendition of the widget. For example:
     - `event-details-paid.css` is a CSS file optimized for event registrations requiring payments
     - `event-details-map.css` is a CSS file optimized for event regirstrations that require the map feature to show
  3. At the top of every file add a short comment/ description on what the purpose of the CSS file is

## Make a new link
Paste the raw link from Github to https://www.jsdelivr.com/github

## Getting the CSS to Update Properly
You may notice that when you update the CSS here that it doesn't automatically update on the website. What you need to do is go to the file here in Github, click on 'History' in the top right of the screen, and see the latest version that you committed. There will be an SHA number you can copy. Then go back to the custom css file and after the 'widgetcss' part of the url add the @ symbol and past the number after that. Here's an example of what it will look like: customcss="https://cdn.jsdelivr.net/gh/perimeterchurch/widget-css@12dfcc6a07bb96396d678d35d3dd60b461173038/opportunity-details/opportunity-details.css".
