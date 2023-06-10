
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
     
    case 'BSD 2-Clause':
      return 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';

    case 'BSD 3-Clause':
      return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';

    case 'GNU GPLv2':
      return 'https://img.shields.io/badge/License-GPL_v2-blue.svg';

    case 'GNU AGPLv3':
      return 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';

    case 'GNU GPLv3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';

    case 'GNU LGPLv3':
      return 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';

    case 'MIT License':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';

    case 'The Unlicense':
      return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    
    default:
      return "";
  }
}

function renderLicenseLink(license) {

  switch (license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
     
    case 'BSD 2-Clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';

    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';

    case 'GNU GPLv2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';

    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0';

    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';

    case 'GNU LGPLv3':
      return 'https://www.gnu.org/licenses/lgpl-3.0';

    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';

    case 'The Unlicense':
      return 'http://unlicense.org/';
    
    default:
      return "";
  }
}


function renderLicenseSection(license) {
    if (license !== '') {
      return license;
    } else {
      return "";
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('here');
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.licence);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
