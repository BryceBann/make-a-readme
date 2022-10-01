// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseType = ""

  switch(license) {
    case 'MIT' :
      licenseType =  "MIT-BLUE.svg"
      break;

      case 'ISC' :
      licenseType =  "ISC-RED.svg"
      break;

      case 'GNU' :
      licenseType =  "GNU-GREEN.svg"
      break;

    }
  
  let badge = `https://img.shields.io/badge/license-${licenseType}`;  
  return badge; 
}

  // TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var licenseLink = ""

  switch(license) {
    case 'MIT' :
      licenseLink = `https://opensource.org/licenses/MIT`
    break ;

    case 'ISC' :
      licenseLink = `https://opensource.org/licenses/ISC`
    break;

    case 'GNU' : 
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0.en.html`
    break;
  }

  let link = licenseLink
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// fuction for read me page layout and take user input and add to the page
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Liscensing:
  ${renderLicenseBadge()}

  ## Table of contents
  - [Description](#descrition)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Liscensing](#liscensing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Liscense:
  ${data.licensing}
  ${renderLicenseLink()}

  ##Additional Info:
  - Github: ${data.github}(https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
