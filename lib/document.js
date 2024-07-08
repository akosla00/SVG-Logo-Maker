const shapes = require('./shapes');
const { renderText } = require('./text')

function createDocument(data) {
    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

     ${shapes}
     `
}
