// Packages to run application
const inquierer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Package to run tests
const jest = require('jest');

const generateCVG = require('./assets/generateCVG');
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