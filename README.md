# Color Palette Generator

## Description

A simple web application that generates random color palettes with exactly three color swatches. Users can click on any color swatch to copy its hexadecimal color code to their clipboard. The palette is automatically generated when the page loads and can be regenerated at any time using the Generate Palette button. The application also includes a click counter feature that tracks how many times new palettes have been generated.

## Features

- Generates exactly 3 random hex color swatches on page load
- Click any swatch to copy its hex code to clipboard
- Shows a "Copied!" confirmation message for 900ms after copying
- Generate new palette via button click
- Click counter displays number of times palette has been generated
- Clean, minimal interface with responsive design
- No external dependencies or libraries required

## Technologies Used

- HTML5 - Structure and semantic markup
- CSS3 - Styling, layout, and visual design
- Vanilla JavaScript - All functionality implemented with pure JavaScript

## File Structure

- `index.html` - Main HTML file containing page structure and content
- `style.css` - Stylesheet with all styling, layout rules, and color variables
- `script.js` - JavaScript file containing all application logic and event handlers

## How to Use

1. Clone or download the repository to your computer
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
3. The page will automatically generate three random colors when it loads
4. Click the "Generate Palette" button to create a new set of random colors
5. Click on any color swatch to copy its hex code to your clipboard
6. A "Copied!" message will appear briefly to confirm the copy action
7. The click counter shows how many times you've generated new palettes

## Project Structure

### index.html
The main HTML document that defines the structure of the page. It contains:
- A container div holding three color swatch elements
- A Generate Palette button and click counter display
- A notification message element for copy confirmations
- A footer with creator information

### style.css
The stylesheet that controls the visual appearance of the application:
- CSS custom properties (variables) defining the color palette using the 60-30-10 design rule
- Layout styles using flexbox for alignment and spacing
- Component-specific styles for swatches, buttons, and messages
- All dimensions specified in pixels for consistency
- Footer styling for bottom placement

### script.js
The JavaScript file that provides all interactive functionality:
- `getRandomHex()` function generates random hexadecimal color codes
- `generatePalette()` function creates three random colors and updates the display
- `copyHexCode()` function handles copying hex codes to clipboard
- `updateClickCounter()` function tracks and displays click count
- Event listeners for button clicks and swatch interactions
- Automatic palette generation on page load

## Credits

Created by Ali Turkey - Ahmed Walid (2025)

## License

All rights reserved
