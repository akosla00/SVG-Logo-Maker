const shapes = require('./shapes.js');


function renderText(shape) {
    if (shapes === 'Square') {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>`
    }
    if (shapes === 'Circle') {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>`
    }
    if (shapes === 'Triangle') {
        return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>`
    }
}
