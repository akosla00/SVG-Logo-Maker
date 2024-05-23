function renderShapes(shape) {
    if (shape === 'Square') {
        return `<rect x="50" y="10" width="200" height="200" fill=${shape.shapeColor} />`
    }
    if (shape === 'Circle') {
        return `<circle cx="150" cy="100" r="80" fill=${shape.shapeColor} />`
    }
    if (shape === 'Triangle') {
        return `<polygon points="150,10 250,188 50,188" fill=${shape.shapeColor} />`
    }
}

module.exports = { renderShapes };
