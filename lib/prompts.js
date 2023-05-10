const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters:',
        validate: input => input.length === 3 || 'Please enter three characters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
    }
];

module.exports = { prompts };
