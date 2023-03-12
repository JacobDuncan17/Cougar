const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle', () => {
  it('should render a blue triangle', () => {
    const triangle = new Triangle('black', '', 'ABC');
    triangle.shapeColor = 'blue';
    const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="130" font-size="32" fill="black" text-anchor="middle">ABC</text></svg>';
    expect(triangle.getSvg().trim()).toEqual(expectedSvg.trim());
  });
});

describe('Square', () => {
  it('should render a orange Square', () => {
    const triangle = new Square('black', '', 'ABC');
    triangle.shapeColor = 'orange';
    const expectedSvg = `<svg version="1.1" width="400" height="180" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="180" fill="orange"/><text x="125" y="110" font-size="45" fill="black" text-anchor="middle">ABC</text></svg>`;

    expect(triangle.getSvg().trim()).toEqual(expectedSvg.trim());
  });
});

describe('Circle', () => {
  it('should render a green circle', () => {
    const triangle = new Circle('black', '', 'ABC');
    triangle.shapeColor = 'blue';
    const expectedSvg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="125" cy="125" r="100" fill="blue"/><text x="125" y="140" font-size="50" fill="black" text-anchor="middle">ABC</text></svg>`;

    expect(triangle.getSvg().trim()).toEqual(expectedSvg.trim());
  });
});