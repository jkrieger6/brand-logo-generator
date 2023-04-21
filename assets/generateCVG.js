// Function that generates the CVG file
function generateCVG(answers) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="300">
        <text x="50" y="50" font-size="50" fill="${answers.textColor}">${answers.text}</text>
        <${answers.shape} cx="200" cy="200" r="100" fill="${answers.shapeColor}"/>
    </svg>
    `;
}