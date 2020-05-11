//const userInfo = require("./user.json");

function generateMarkdown(responses) {
  return `
# ${responses.title}
Badges:
* ${responses.description}
---
## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)
---
## Installation
\`\`\`
  ${responses.installation}
  ${responses.dependencies}
\`\`\`
---
## Usage
  ${responses.usage}
### User Story
\`\`\`
  AS a ${responses.role}

  I WANT a ${responses.title}

  SO THAT I ${responses.usage}
\`\`\`
---
## License
  [![License: ${responses.license}](https://img.shields.io/badge/License-${responses.license}-blue.svg)](https://opensource.org/licenses/${responses.license})
---
## Contributors
  ${responses.name1}
---
## Test
\`\`\`
  ${responses.test}
\`\`\`
---
## Questions
  Send Questions to ${responses.name1} at ${responses.email}.
---
`;
}

module.exports = generateMarkdown;
