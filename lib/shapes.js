class Triangle {
    constructor(data) {
        this.shape = data.shape;
        this.text = data.text;
        this.shapeColor = data.shapeColor;
        this.textColor = data.textColor;
    }
    renderTriangle(data) {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     <polygon points="150,10 250,188 50,188" fill="${data.shapeColor}" />
     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
     </svg>`
      };
}

class Square {
    constructor(data) {
        this.shape = data.shape;
        this.text = data.text;
        this.shapeColor = data.shapeColor;
        this.textColor = data.textColor;
    }
    renderSquare(data) {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     <rect x="50" y="10" width="200" height="200" fill="${data.shapeColor}" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
     </svg>`
    };
}

class Circle {
    constructor(data) {
        this.shape = data.shape;
        this.text = data.text;
        this.shapeColor = data.shapeColor;
        this.textColor = data.textColor;
    }
    renderCircle(data) {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
     </svg>`
    };
}



module.exports = { Triangle, Circle, Square }
