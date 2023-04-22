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