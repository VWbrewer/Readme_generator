// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    message: 'Provide a description explaining the what, why, and how of your project.',
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
    type: 'input',
    name: 'Credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
    type: 'input',
    name: '',
    message: '',
    },
    {
    type: 'input',
    name: '',
    message: '',
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










// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;