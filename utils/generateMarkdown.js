const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  if (!license === '') {
  return ``;
} else {
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license === '') {
    return ``;
  } if (license === 'MIT') {
      return `https://mit-license.org/`
  } if (license === 'GPL') {
      return `https://www.gnu.org/licenses/gpl-3.0-standalone.html`
  } if (license === 'CC0') {
      return `https://creativecommons.org/licenses/by-sa/4.0/legalcode`
  } if (license === 'APACHE_2.0') {
      return `https://www.apache.org/licenses/LICENSE-2.0`
  } if (license === 'ISC') {
      return `https://www.isc.org/licenses/`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license === '') {
    return ``;
  } else {
    return `The ${license} license was used for this project.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${renderLicenseSection(data.License)}


  ## Contributing
  [Contributor Covenant] (https://www.contributor-covenant.org/)
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  If you have questions about this project please connect with me through:  
  GitHub: https://github.com/${data.username}  
  Email: ${data.email}`;
}

module.exports = generateMarkdown;
