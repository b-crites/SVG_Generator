const fs = require('fs');
const inquirer = require('inquirer');
const { genSVG } = require('./lib/svg');
const { prompts } = require('./lib/prompts');

const promptQuestions = () => {
    return inquirer.prompt(prompts);
};

async function main() {
    const answers = await promptQuestions();
    console.log(answers);

    const svg = genSVG(answers);

    fs.writeFileSync('examples/logo.svg', svg.svg());
    console.log('Generated logo.svg');
}

main();