// Shapes variables
const circle = `<circle cx="25" cy="25" r="20"/>`;
const square = `<rect x="10" y="10" width="30" height="30"/>`;
const triangle = `<polygon points="25,5 5,45 45,45"/>`;

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

// Variable to add text to cvg
const cvgText = `<text x="50%" y="50%" fill="black" font-size="30" text-anchor="middle" dy=".3em">${data.text}</text>`;
 function generateTextCvg(cvgText) {
    return cvgText;
 }
// Variable to add color to text to cvg
const cvgColor = `<rect width="100%" height="100%" fill=${data.textColor} />`;

function generateTextColorCvg(cvgColor) {
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

// Function to add shapeColor to cvg
function generateShapeColorCvg(cvgColor) {
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



