
const swatch1 = document.getElementById('swatch1');
const swatch2 = document.getElementById('swatch2');
const swatch3 = document.getElementById('swatch3');

const hex1 = document.getElementById('hex1');
const hex2 = document.getElementById('hex2');
const hex3 = document.getElementById('hex3');

const generateBtn = document.getElementById('generateBtn');

function getRandomHex() {
  const chars = '0123456789ABCDEF';
  let hex = '#';
  
  for (let i = 0; i < 6; i++) {
    hex = hex + chars[Math.floor(Math.random() * 18)];
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


// Generate button in main section
generateBtn.addEventListener('click', function() {
  generatePalette();
});

// Generate initial colors when page loads
generatePalette();
