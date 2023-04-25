// Node packages to run application
const inquirer = require("inquirer");
// Node packages to create file
const fs = require("fs");
const path = require("path");
// module imported to generate svg
const generateSVG = require("./assets/generateSVG");
// Node package to generate colors
const colors = require("chalk");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters of text for your logo:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color or hexidecimal number for your text:",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color or hexidecimal number for your shape:",
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
    if(text.length > 3) {
      throw new Error("Please enter a text that is less than 3 characters.");
    } 
  }
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
    inquirer
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
