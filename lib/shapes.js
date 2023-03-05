const shapes = {
    circle: (color, shapeColor, characters) =>`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="125" cy="125" r="100" fill="${shapeColor}"/>
            <text x="125" y="140" font-size="50" fill="${color}" text-anchor="middle">${characters}</text>
        </svg>
    `,
    triangle: (color, shapeColor, characters) =>`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>
            <text x="150" y="130" font-size="32" fill="${color}" text-anchor="middle">${characters}</text>
        </svg>
    `,
    square: (color, shapeColor, characters) =>`
    <svg version="1.1" width="400" height="180" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="20" width="150" height="180" fill="${shapeColor}"/>
            <text x="125" y="110" font-size="45" fill="${color}" text-anchor="middle">${characters}</text>
        </svg>
    `,
};

module.exports = shapes;
    