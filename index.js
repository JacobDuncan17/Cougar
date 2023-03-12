const inquirer = require ('inquirer');
const fs = require ('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
class logoGenerator {
  async promptUser() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'characters',
        message: 'Enter up to three characters',
        validate: function (value) {
          var valid = value.length <= 3;
          return valid || 'Please enter no more than 3 characters:';
        },
      },
      {
        type: 'input',
        name: 'color',
        message: 'Enter text color (Can be keyword or hexadecimal:)',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: [
          { name: 'Circle', value: Circle },
          { name: 'Triangle', value: Triangle },
          { name: 'Square', value: Square },
        ],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (Can be keyword or hexadecimal):',
      },
    ])
    .then((answers) => {
      const ShapeClass = answers.shape

      const shapeInstance = new ShapeClass(answers.color, answers.shapeColor, answers.characters);

        const svg = shapeInstance.getSvg();
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
