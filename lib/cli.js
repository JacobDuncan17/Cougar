const inquirer = require ('inquirer');

function createSVG() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters',
                validate: function (value) {
                    var valid = value.length <= 3;
                    return valid || 'Please enter no more than 3 characters';
                }
            },
            {

            },
            {

            },
            {

            },
            
        ])
}