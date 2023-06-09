//imports
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md';
//array of questions for inquirer prompt
const questions = [ 
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What steps are required for installation?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "How do you use your project?",
        name: 'usage'
    },

    {
        type: 'input',
        message: "How can others contribute to your project?",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Apache License 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU GPLv2', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'ChadBowler',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your contact email?",
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },   
];
//Node File System to write new README.md file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log('README.md file created!');
    });
};
//function to initialize
function init() {
    
    inquirer
    .prompt(questions)
    .then((answers) => {
        const rmFile = generateMarkdown(answers);
        writeToFile(fileName, rmFile);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error(error);
        } else {
            console.error(error);
        }
    });
};
//call init function
init();
