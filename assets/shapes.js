const index = require('../index.js');

// Shapes variables
const circle = `<circle cx="25" cy="25" r="20"/>`;
const square = `<rect x="10" y="10" width="30" height="30"/>`;
const triangle = `<polygon points="25,5 5,45 45,45"/>`;

// Function to render shape on user input
function renderShape(shape) {
    if (shape === 'circle') {
        return circle;
    } else if (shape === 'square') {
        return square;
    } else if (shape === 'triangle') {
        return triangle;
    } else {
        return "Please select a shape from the list.";
    }
}

// Function to add text to svg
const svgText = data.text;
 function renderTextSvg(text) {
    return svgText;
 }
// Function to add color to text to svg
const svgTextColor = data.textColor;

function generateTextColorSvg(textColor) {
    if (data.textColor === 'red') {
        return <style> color = 'red' + style color= '#ff0000'</style>;
    } else if (data.textColor === 'blue') {
        return <style> color = 'blue' + color = '#0000ff' </style>;
    } else if (data.textColor === 'green') {
        return green;
    } else if (data.textColor === 'yellow') {
        return yellow;
    } else if (data.textColor === 'purple') {
        return purple;
    } else if (data.textColor === 'orange') {
        return orange;
    } else if (data.textColor === 'black') {
        return black;
    }
}

// Or do i just make a function to check if the color is truthy and 
// then return the color and error if false?
// Example:
//function generateShapeColorSvg(shapeColor) {
//   if (data.shapeColor === true) {
    //     return data.shapeColor;
    // } else {
    //     return "Please enter a valid color.";

// Function to add shapeColor to svg
function generateShapeColorSvg(shapeColor) {
    if (data.shapeColor === 'red') {
        return red;
    }
    else if (data.shapeColor === 'blue') {
        return blue;
    }
    else if (data.shapeColor === 'green') {
        return green;
    }
    else if (data.shapeColor === 'yellow') {
        return yellow;
    }
    else if (data.shapeColor === 'purple') {
        return purple;
    }
    else if (data.shapeColor === 'orange') {
        return orange;
    }
    else {
        return "(err)";
    }
}

// Function that returns color choice to svg
function renderColor(textColor, shapeColor) {
    return ` 
    ${generateShapeColorSvg(shapeColor)} 
    ${generateTextColorSvg(textColor)}`;
}

// Function to generate svg file
function generateSVG(data) {
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        "${renderShape(data.shape)}${(renderColor(textColor, shapeColor))}"
        <text x="50%" y="50%" fill="${data.textColor}" font-size="30" text-anchor="middle" dy=".3em">${data.text}</text>
        </svg>`;
}

module.exports = generateSVG;

