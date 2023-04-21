// Packages to run application
const inquierer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Package to run tests
const jest = require('jest');

const generateCVG = require('./assets/generateCVG');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Enter up to three characters. (Required)",
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Enter a color keyword (or hexadecimal number) for font color. (Required)",
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter a color keyword (or hexadecmial number) for the color of your shape. (Required)",
    }
];
