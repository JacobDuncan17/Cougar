const shapes = require('./shapes');

test('renders a blue cirlce', () => {
    const svg = shapes.circle('blue', 'white', 'ABC');
    expect(svg).toEqual(expect.stringContaining('fill="blue"'));
});

test('renders a yellow square', () => {
    const svg = shapes.square('yellow', 'white', 'ABC');
    expect(svg).toEqual(expect.stringContaining('fill="yellow"'));
});
test('renders a blue triangle', () => {
    const svg = shapes.triangle('blue', 'white', 'ABC');
    expect(shape.render()).toEqual('polygon points="150, 18 244, 182 56, 182" fill="blue"');
});

