const index = require("../index.js");


//const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Shapes class 
class Shapes {
  constructor() {
    this.shapeColor = "";
  }
  setColor (color) {
    this.shapeColor = color;
  }
}

    class Circle extends Shapes {
        render() {
            return `<circle cx="25" cy="25" r="20" fill="${this.shapeColor}"/>`;
        }
    }

    class Square extends Shapes {
      render () {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`
      }
    }

    class Triangle extends Shapes {
        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
        }
    }

// Render text function
function renderTextSvg() {
  return `<text x="50%" y="50%" fill="${this.textColor}" font-size="30" text-anchor="middle" dy=".3em">${this.text}</text>`;
};

// Function to render shapes
function renderShape(shape, shapeColor) {
    let shapeObj = null;
    if (shape === 'circle') {
        shapeObj = new Circle();
    } else if(shape === 'square') {
        shapeObj = new Square();
    } else if(shape === 'triangle') {
        shapeObj = new Triangle();
    } else {
        throw new Error('Please select a valid shape from the list.');
    }
    shapeObj.setColor(shapeColor)
    return shapeObj.render()    
}

// Function to add text to svg

// class Text {
//   constructor(text, textColor) {
//     this.text = text;
//     this.textColor = textColor;
// const svgText = data.text;
// if (svgText.length > 3) {
//   throw new Error("Please enter up to three characters.");
//   }
// }
// }

// Or do i just make a function to check if the color is truthy and
// then return the color and error if false?
// Example:
//function generateShapeColorSvg(shapeColor) {
//   if (data.shapeColor === true) {
//     return chalk.color(data.shape);
// } else {
//     return "Please enter a valid color.";

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
        ${renderShape(data.shape, data.shapeColor)}
        <text x="50%" y="50%" fill="${
          data.textColor
        }" font-size="30" text-anchor="middle" dy=".3em">${data.text}</text>
        </svg>`;
}

module.exports = generateSVG;
