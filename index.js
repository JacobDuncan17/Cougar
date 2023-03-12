const inquirer = require ('inquirer');
const fs = require ('fs');
const shapes = require('./lib/shapes');
class logoGenerator {
    constructor (characters, color, shape, shapeColor) {
        this.characters = characters;
        this.color = color;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
  async promptUser() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters',
        validate: function (value) {
          var valid = value.length <= 3;
          return valid || 'Please enter no more than 3 characters';
        },
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter text color (Can be keyword or hexadecimal)',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Cirlce', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (Can be keyword or hexadecimal)',
      },
    ])
    .then((answers) => {
        const svg = `
        ${shapes[answers.shape](answers.color, answers.shapeColor, answers.characters)}
        `;
        fs.writeFile('logo.svg', svg, (err) => {
          if (err) throw err;
          console.log('Generated logo.svg');
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
const generator = new logoGenerator();
generator.promptUser();
