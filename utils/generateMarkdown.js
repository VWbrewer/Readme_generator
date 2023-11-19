const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  if (!license) {
  return ``;
} else {
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ``;
  } else if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`;
  } else if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`;
  } else if (license === 'CC0') {
    return `https://creativecommons.org/licenses/by-nd/4.0`;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## License
    This ${license} license was used for this project.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.licenses)}

  ## Contributing
  [Contributor Covenant] (https://www.contributor-covenant.org/)
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have questions about this project please connect with me through:  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}`;
}

module.exports = generateMarkdown;
