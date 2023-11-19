// Included the packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { userInfo } = require('os');


// Created an array of questions for the user input
const questions = [
    {
    type: 'input',
    name: 'Title',
    message: 'What is your projects title?',
    },
    {
    type: 'input',
    name: 'Description',
    message: 'Provide a description explaining the what, why, and how of your project, What was your motivation?, Why did you build this project?, What problem does it solve, What did you learn?'
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
    choices:["","MIT","GPL","CC0","APACHE_2.0","ISC"]
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
    name: 'username',
    message: 'Please enter your GitHub user name?',
    validate: (username) =>
    {if(!username) {
            return  "Please provide your GitHub name."
        }
        return true;
    }
    },
    {
    type: 'input',
    name: 'email',
    message: 'Please enter your e-mail?',
    validate: (email) =>
    {if(!email) {
            return  "Please provide your e-mail."
        }
        return true;
    }
    },
]

// Created a function to write README file
// Created a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        
        fs.writeFileSync('README.md', generateMarkdown(answers),function(err){
            if(err) throw err;
        })
        
    })
}
// Function call to initialize app
init();