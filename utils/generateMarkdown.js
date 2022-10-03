// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  var licenseType = ""

  switch(license) {
    case 'MIT' :
      licenseType =  'MIT-blue.svg'
      break;

      case 'ISC' :
      licenseType =  'ISC-yellow.svg'
      break;

      case 'GNU' :
      licenseType =  'GNU-yellow.svg'
      break;

      case 'noce' :
        licenseType = 'none-res.svg'
        break;

    }
  
  let badge = `https://img.shields.io/badge/license-${licenseType}`;  
  return badge
}

  // TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {

  var licenseLink = ""

  switch(license) {
    case 'MIT' :
      licenseLink =  'https://opensource.org/licenses/MIT'
    break ;

    case 'ISC' :
      licenseLink = 'https://opensource.org/licenses/ISC'
    break;

    case 'GNU' : 
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
    break;

    case 'None':
      licenseLink = ''
      break;
  }
  let link = licenseLink
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if(license == 'none') {
    return ''
  }else{
    return `The project is covered under the ${license}. Click on the badge for more information`
  }
}

// fuction for read me page layout and take user input and add to the page
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

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
  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})    
  ${renderLicenseSection(data.license)}  

  ##Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
