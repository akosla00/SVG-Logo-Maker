const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your initials',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color (or hexadecimal number)',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color (or hexidecimal number',
        },
    ])
