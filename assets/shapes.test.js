const Shapes = require('./shapes.js');
const textObj = require('index.js');
// Package to run tests
const jest = require("jest");

// Test to check if the renderShape function returns a green circle when chosen as shape
describe('Initialize renderShape', () => {
    it('should return a green circle when chosen', () => {
        const shape = new Circle;
        shape.setColor("green");
        expect(result).toBe('<circle cx="150" cy="100" r="82" fill="green"/>');
    });
});

// Test to check if the renderShape function returns a red square when chosen as shape
describe('Initialize renderShape', () => {
    it('should return a red square when chosen', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(result).toBe('<rect x="56" y="18" width="188" height="164" fill="red"/>');
    });
});

// Test to check if the renderShape function returns a blue triangle when chosen as shape
describe('Initialize renderShape', () => {
    it('should return a blue triangle when chose as shape', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    });
});

// Test to see if error is thrown when number of characters is greater than 3
describe('Initialize textObj', () => {
    it('should thrown an error if a number greater than three is entered', () => {
        const text = 'abcd';
        const result = new SvgText(text);
        expect(result).toThrowError('Please enter up to three characters.');
    });
});