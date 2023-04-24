// Node packages to run application
const inquierer = require("inquirer");
// Node packages to create file
const fs = require("fs");
const path = require("path");
// module imported to generate svg
const generateSVG = require("./assets/generateSVG");
// Node package to generate colors
const colors = require("chalk");
// Package to run tests
const jest = require("jest");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters of text for your logo:",
    validate: (input) => {
      return input.length >= 0 && input.length <= 3
        ? true
        : "Please enter up to three characters.";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color or hexidecimal number for your text:",
    validate: (input) => {
      return;
    },
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color or hexidecimal number for your shape:",
    validate: (input) => {
      return;
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your badge:",
    choices: ["circle", "square", "triangle"],
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
const shape = ["circle", "square", "triangle"];
const color = ["red", "blue", "green", "yellow", "purple", "orange"];
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

// Function to generate svg file
function generateSVG(data) {
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${data.shapeColor}" />
        <text x="50%" y="50%" fill="${data.textColor}" font-size="30" text-anchor="middle" dy=".3em">${data.text}</text>
    </svg>
    `;
}
// Function to write svg file
function writeToFile(fileName, data) {
  const svgTmplate = generateSVG(data);

  fs.writeFile(fileName, svgTmplate, (err) => {
    err ? console.log(err) : console.log("Succesfully generated logo.svg");
  });
}

// function to initialize application
function init() {
  const outputDirectory = path.join(process.cwd(), "output");
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  } else {
    const outPutPath = path.join(outputDirectory, "logo.svg");
    inquierer
      .prompt(questions)
      .then((data) => {
        const logo = generateSVG(data);
        writeToFile(outPutPath, logo);
        console.log("Succesfully generated logo.svg");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Function call to initialize application
init();
