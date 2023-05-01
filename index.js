const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./lib/svg');
const { questions } = require('./lib/prompts');


const promptQuestions = () => {
    return inquirer.prompt(questions);
};


async function main() {
    
    const answers = await promptQuestions();
    console.log(answers);

    // Generate an SVG string using the createSVG function and the user's answers
    const svg = createSVG(answers);

    // Write the SVG string to a file named logo.svg in the examples directory
    fs.writeFile('examples/logo.svg', svg, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

// Call the main function to start the program
main();