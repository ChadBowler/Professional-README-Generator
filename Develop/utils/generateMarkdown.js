//license badges from github gist - list of licenses from a github blog that breaks down most popular licenses on github
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
     
    case 'BSD 2-Clause':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';

    case 'BSD 3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';

    case 'GNU GPLv2':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';

    case 'GNU AGPLv3':
      return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';

    case 'GNU GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';

    case 'GNU LGPLv3':
      return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';

    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';

    case 'The Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    
    default:
      return "";
  }
};
//links to licenses
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
     
    case 'BSD 2-Clause':
      return `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;

    case 'BSD 3-Clause':
      return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;

    case 'GNU GPLv2':
      return `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;

    case 'GNU AGPLv3':
      return `[${license}](https://www.gnu.org/licenses/agpl-3.0)`;

    case 'GNU GPLv3':
      return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;

    case 'GNU LGPLv3':
      return `[${license}](https://www.gnu.org/licenses/lgpl-3.0)`;

    case 'MIT License':
      return `[${license}](https://opensource.org/licenses/MIT)`;

    case 'The Unlicense':
      return `[${license}](http://unlicense.org/)`;
    
    default:
      return "";
  }
};
//didn't need the renderLicenseSection function provided
//main functionality organizing the README file
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  return `# ${data.title}

# ${licenseBadge}

## Description
${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#Credits)
- [Badges](#Badges)
- [Features](#Features)
- [Contributing](#Contributing)
- [Tests](#Tests)

## Installation

* ${data.installation}

## Usage

* ${data.usage}


## License

* This application is licenced under the ${licenseLink}

## Contributing

* ${data.contributing}

## Tests

* ${data.tests}

## Questions

* Checkout my Github! [${data.username}](https://www.github.com/${data.username})

* If you have questions, feel free to contact me at: ${data.email}

`;
}
//export
module.exports = generateMarkdown;
