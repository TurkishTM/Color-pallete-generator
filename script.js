// Getting all the elements we need from the page
const swatch1 = document.getElementById('swatch1');
const swatch2 = document.getElementById('swatch2');
const swatch3 = document.getElementById('swatch3');
const hex1 = document.getElementById('hex1');
const hex2 = document.getElementById('hex2');
const hex3 = document.getElementById('hex3');
const generateBtn = document.getElementById('generateBtn');
const heroGenerateBtn = document.getElementById('heroGenerateBtn');
const copiedMsg = document.getElementById('copiedMsg');

// Function to create a random hex color
// Just picks random characters from 0-9 and A-F
function getRandomHex() {
  const chars = '0123456789ABCDEF';
  let hex = '#';
  
  // Make 6 random hex digits
  for (let i = 0; i < 6; i++) {
    hex = hex + chars[Math.floor(Math.random() * 16)];
  }
  
  return hex;
}

// Generate three random colors and update the swatches
function generatePalette() {
  const color1 = getRandomHex();
  const color2 = getRandomHex();
  const color3 = getRandomHex();

  // Update each swatch with its new color
  swatch1.style.backgroundColor = color1;
  hex1.textContent = color1;

  swatch2.style.backgroundColor = color2;
  hex2.textContent = color2;

  swatch3.style.backgroundColor = color3;
  hex3.textContent = color3;
}

// Copy hex code to clipboard when user clicks a swatch
function copyHexCode(hexText) {
  // Create a hidden textarea element
  // Browsers can only copy from input/textarea elements
  const tempInput = document.createElement('textarea');
  tempInput.value = hexText;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  
  // Select and copy the text
  tempInput.select();
  document.execCommand('copy');
  
  // Clean up - remove the temporary element
  document.body.removeChild(tempInput);

  // Show the "Copied!" message
  copiedMsg.classList.add('show');

  // Hide the message after 900ms
  setTimeout(function() {
    copiedMsg.classList.remove('show');
  }, 900);
}

// Event listeners - what happens when users click things

// Clicking each swatch copies its hex code
swatch1.addEventListener('click', function() {
  copyHexCode(hex1.textContent);
});

swatch2.addEventListener('click', function() {
  copyHexCode(hex2.textContent);
});

swatch3.addEventListener('click', function() {
  copyHexCode(hex3.textContent);
});

// Generate button in main section
generateBtn.addEventListener('click', function() {
  generatePalette();
});

// Hero button - generates colors and scrolls to palette
heroGenerateBtn.addEventListener('click', function() {
  generatePalette();
  document.getElementById('palette').scrollIntoView({ behavior: 'smooth' });
});

// Generate initial colors when page loads
generatePalette();
