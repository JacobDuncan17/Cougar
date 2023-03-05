const inquirer = require ('inquirer');
const fs = require ('fs');
class logoGenerator {
    constructor () {
        this.characters = '';
        this.color = '';
        this.shape = '';
        this.shapeColor = '';
        this.promptUser();
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
        choices: Object.keys(shapes),
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (Can be keyword or hexadecimal)',
      },
    ]);
    this.characters = answers.characters;
    this.color = answers.color;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }
}