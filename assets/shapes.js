// Shapes variables
const circle = `<circle cx="25" cy="25" r="20"/>`;
const square = `<rect x="10" y="10" width="30" height="30"/>`;
const triangle = `<polygon points="25,5 5,45 45,45"/>`;

// Variable to add text to svg
const cvgText = `<text x="50%" y="50%" fill="black" font-size="30" text-anchor="middle" dy=".3em">${data.text}</text>`;

// Variable to add color to svg
const cvgColor = `<rect width="100%" height="100%" fill=${data.color} />`;

// Variable to add shape to svg
const cvgShape = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${cvgColor}${cvgText}${data.shape}</svg>`;



