class Shape {
    constructor (color, shapeColor, characters) {
        this.color = color;
        this.shapeColor = shapeColor;
        this.characters = characters;
    }
getSvg() {
     throw new Error('Error');
    }
}

class Circle extends Shape {
    getSvg() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="125" cy="125" r="100" fill="${this.shapeColor}"/><text x="125" y="140" font-size="50" fill="${this.color}" text-anchor="middle">${this.characters}</text></svg>`
    }
}

class Triangle extends Shape {
    getSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="130" font-size="32" fill="${this.color}" text-anchor="middle">${this.characters}</text></svg>`
    }
}
class Square extends Shape {
    getSvg() {
        return `<svg version="1.1" width="400" height="180" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="180" fill="${this.shapeColor}"/><text x="125" y="110" font-size="45" fill="${this.color}" text-anchor="middle">${this.characters}</text></svg>`
    }
}

module.exports = {
    Circle,
    Triangle,
    Square,
};
