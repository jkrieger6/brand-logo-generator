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
        return "(err)";
    }
}

// Function to add text to svg
const svgText = `<text x="50%" y="50%" fill="black" font-size="30" text-anchor="middle" dy=".3em">${data.text}</text>`;
 function renderTextSvg(svgText) {
    return svgText;
 }
// Function to add color to text to svg
const svgTextColor = `${data.textColor}`;

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
function renderShapeColor(shapeColor) {
    return ` ${generateShapeColorSvg(shapeColor)} ${generateTextColorSvg(textColor)}`
}


