// Packages to run application
const inquierer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Package to run tests
const jest = require('jest');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters of text for your badge:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color or hexidecimal number for your text:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color or hexidecimal number for your shape:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your badge:',
        choices: ['circle', 'square', 'triangle'],
    },  
];


// array of questions for user input as class constructor
class Questions {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}
// varables to design shape and color options
const shape = ['circle', 'square', 'triangle'];
const color = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
class Circle extends Questions {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}

    class Sqaure extends Questions {
        constructor(text, textColor, shapeColor) {
            super(text, textColor, shape, shapeColor);
        }
    }

    class Triangle extends Questions {
        constructor(text, textColor, shapeColor) {
            super(text, textColor, shape, shapeColor);
        }
    }

// function to generate cvg file
function generateCVG (data) {
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${data.shapeColor}" />
        <text x="50%" y="50%" fill="${data.textColor}" font-size="30" text-anchor="middle" dy=".3em">${data.text}</text>
    </svg>
    `;
}
// function to write cvg file
if (data.shape === 'circle') {
    svg += `<circle cx="150" cy="100" r="50" fill="${data.shapeColor}" />`;
  } else if (data.shape === 'triangle') {
    svg += `<polygon points="150,50 100,150 200,150" fill="${data.shapeColor}" />`;
  } else if (data.shape === 'square') {
    svg += `<rect x="50" y="50" width="200" height="100" fill="${data.shapeColor}" />`;
  }

  svg += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="80" fill="${data.textColor}">${data.text}</text>`;

  const logo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
  fs.writeFileSync('logo.svg', logo);
  console.log('Generated logo.svg');
