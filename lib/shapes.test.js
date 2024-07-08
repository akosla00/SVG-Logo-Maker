const { Triangle, Circle, Square } = require('./shapes')



describe('Triangle', () => {
    test('should create blue triangle', () => {
        const data = {
            // data: {
                shape: "Triangle",
                text: "AMK",
                textColor: "pink",
                shapeColor: "blue"
            // }

        }
        const shape = new Triangle(data);
        expect(shape.renderTriangle(data)).toEqual(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     <polygon points="150,10 250,188 50,188" fill="blue" />
     <text x="150" y="150" font-size="60" text-anchor="middle" fill="pink">AMK</text>
     </svg>`);
    });
});

describe('Circle', () => {
    test('should create blue circle', () => {
        const data = {
            // data: {
            shape: "Circle",
            text: "AMK",
            textColor: "pink",
            shapeColor: "blue"
            // }

        }
        const shape = new Circle(data);
        expect(shape.renderCircle(data)).toEqual(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="100" r="80" fill="blue" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">AMK</text>
     </svg>`);
    });
});

describe('Square', () => {
    test('should create blue square', () => {
        const data = {
            // data: {
            shape: "Square",
            text: "AMK",
            textColor: "pink",
            shapeColor: "blue"
            // }

        }
        const shape = new Square(data);
        expect(shape.renderSquare(data)).toEqual(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     <rect x="50" y="10" width="200" height="200" fill="blue" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">AMK</text>
     </svg>`);
    });
});
