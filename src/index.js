// JavaScript code for color changing button and history display using RGB colors from an array in rainbow order
const colorBtn = document.getElementById('colorBtn');
const colorHistory = document.getElementById('colorHistory');
const colorsRGB = [
    { r: 255, g: 0, b: 0 }, 
    { r: 255, g: 127, b: 0 }, 
    { r: 255, g: 255, b: 0 }, 
    { r: 0, g: 255, b: 0 }, 
    { r: 0, g: 0, b: 255 }, 
    { r: 75, g: 0, b: 130 }, 
    { r: 148, g: 0, b: 211 } 
];
let currentIndex = 0; 

// Event listener for button click
colorBtn.addEventListener('click', changeColor);

// Function to change background color and update history
function changeColor() {
    const currentColor = colorsRGB[currentIndex]; 
    const rgbColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`; 
    document.body.style.backgroundColor = rgbColor;
    updateColorHistory(rgbColor); 
    currentIndex = (currentIndex + 1) % colorsRGB.length; 
}

// Function to update color history display
function updateColorHistory(color) {
    const colorDiv = document.createElement('div'); 
    colorDiv.style.backgroundColor = color; 
    colorDiv.textContent = color; 
    colorHistory.appendChild(colorDiv); 
}
// JavaScript code to add a sticky footer at the bottom of the page
const footerText = '©Created by Michelle 2024 '; // Footer text content

// Create footer element
const footer = document.createElement('footer');
footer.textContent = footerText;

// Style the footer to be sticky at the bottom
footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.left = '0';
footer.style.width = '100%';
footer.style.backgroundColor = '#123';
footer.style.color = '#fff';
footer.style.padding = '10px';
footer.style.textAlign = 'center';

// Append footer to the document body
document.body.appendChild(footer);

