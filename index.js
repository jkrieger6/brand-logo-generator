// Packages to run application
const inquierer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Package to run tests
const jest = require('jest');

const generateCVG = require('./src/generateCVG');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What are three characters that represent your vision? (Required)",
    },
    {
        type: 'input',
        name: 'color',
        message: "Enter a color for the background of your logo (Required)",
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    }
];
