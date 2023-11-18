// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
    
    {
    type: 'input',
    name: 'Project Title',
    message: 'What is your projects title?',
    },
    {
    type: 'input',
    name: 'Description',
    message: 'Provide a description explaining the what, why, and how of your project',
    'What was your motivation?':
    'Why did you build this project?',
    'What problem does it solve?':
    'What did you learn?',
    },
    {
    type: 'input',
    name: 'Table of Contents',
    message: 'Add a table of contents with links to the section',
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?',
    },
    {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
    type: 'list',
    name: 'License',
    message: 'Select a license that you used from the list.',
    },
    {
    type: 'input',
    name: 'Contributing',
    message: 'If you would like to contribute to it please follow these steps.',
    },
    {
    type: 'input',
    name: 'Tests',
    message: 'Instructions on how to run tests.',
    },
    {
    type: 'input',
    name: 'Questions',
    message: 'Please enter the following information.',
    },
])
];



.then((answers) => {

const htmlPageContent = generateHTML(answers);

fs.writeFile('index.html', htmlPageContent, (err) =>

err ? console.log(err) : console.log('Successfully created!')
);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();