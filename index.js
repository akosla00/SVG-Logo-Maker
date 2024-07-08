const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes.js');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, shapes(data), (err) =>
        err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
}

function shapes(data) {
    if (data.shape === 'Square') {
        const square = new Square(data);
        return square.renderSquare(data);
    }
    if (data.shape === 'Circle') {
        const circle = new Circle(data);
        return circle.renderCircle(data);
    }
    if (data.shape === 'Triangle') {
        const triangle = new Triangle(data);
        return triangle.renderTriangle(data);
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your initials',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color (or hexadecimal number)',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color (or hexidecimal number',
        },
    ]).then((answers) => {
        writeToFile('./examples/logo.svg', answers);
    });
