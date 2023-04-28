const Shapes = require('./shapes.js');
const renderShape = require('./shapes.js')
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');
const textObj = require('../index.js'); 

// Test to see if error is thrown when number of characters is greater than 3
describe('textObj', () => {
    it('should thrown an error if a number greater than 3 is entered', () => {
        const text = 'abcd';
        expect(textObj(text)).toEqual('Please enter up to three characters for your logo.');
    });
});

describe('Shapes', () => {
    it('should exist', () => {
        expect(Shapes).toBeDefined();
    })
// Test to check if the Shapes function returns a green circle when chosen as shape
describe('renderShape', () => {
    it('should return a green circle when chosen', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="82" fill="green"/>');
    });
});
// Test to check if the renderShape function returns a red square when chosen as shape
describe('Square', () => {
    it('should return a red square when chosen', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="56" y="18" width="188" height="164" fill="red"/>');
    });
});

// Test to check if the renderShape function returns a blue triangle when chosen as shape
describe('Triangle', () => {
    it('should return a blue triangle when chose as shape', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    });
});


});




