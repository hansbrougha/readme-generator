//const userInfo = require("./user.json");

function generateMarkdown(responses) {
  return `
# ${responses.title}
* ${responses.description}
---
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Questions](#questions)
  * [License](#license)
---
## Installation
* To install necessary dependencies, run the following command:
\`\`\`
  ${responses.installation}
\`\`\`
---
## Usage
* ${responses.usage}
  ### User Story
\`\`\`
  AS a ${responses.role}

  I WANT a ${responses.title}

  SO THAT I can ${responses.usage}
\`\`\`
![${responses.title} demo](./${responses.demo})
---
## Contributors
* ${responses.name1}
---
## Test
* To run tests, run the following command:
\`\`\`
  ${responses.test}
\`\`\`
---
## Questions
* Send Questions to ${responses.name1} at ${responses.email}.
---
## License
[![License: ${responses.license}](https://img.shields.io/badge/License-${responses.license}-blue.svg)](https://opensource.org/licenses/${responses.license})
---
`;
}

module.exports = generateMarkdown;
