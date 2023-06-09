
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [];




function writeToFile(fileName, data) {}
fs.writeFile('README.md', rmFile, err => {
    err ? console.error(err) : console.log('README.md file created!');
});

function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
 
    const rmFile = generateMarkdown.generateMarkdown(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
};


init();
