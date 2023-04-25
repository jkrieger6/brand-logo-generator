const Shapes = require('./shapes.js');
// Package to run tests
const jest = require("jest");

// Test to check if the renderShape function returns circle when chosen as shape
describe('Initialize renderShape', () => {
    it('should return circle when chosen', () => {
        const shape = circle;
        const result = new Shapes(Shapes);
        expect(result).toBe(shape);
    });
});

// Test to check if the renderShape function returns square when chosen as shape
describe('Initialize renderShape', () => {
    it('should return square when chosen', () => {
        const shape = square;
        const result = new Shapes(Shapes);
        expect(result).toBe(shape);
    });
});

// Test to check if the renderShape function returns triangle when chosen as shape
describe('Initialize renderShape', () => {
    it('should return triangle when chose as shape', () => {
        const shape = triangle;
        const result = new Shapes(Shapes);
        expect(result).toBe(shape);
    });
});

// Test to check if the generateTextCvg function returns text
describe('Initilaize renderTextSvg', () => {
    it('should return user input text', () => {
        const text = 'abc';
        const result = new SvgText(text);
        expect(result).toBe(text);
    });
});

// Test to see if error is thrown when number of characters is greater than 3
describe('Initialize renderTextSvg', () => {
    it('should thrown an error if a number greater than three is entered', () => {
        const text = 'abcd';
        const result = new SvgText(text);
        expect(result).toThrowError('Please enter up to three characters.');
    });
});