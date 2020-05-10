//const userInfo = require("./user.json");

function generateMarkdown(responses) {
  return `
# ${responses.title}
* ${responses.description}
---
## Table of Contents\n
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#questions)
---
## Installation
\`\`\`
${responses.installation}
\`\`\`
---
## Usage
* ${responses.usage}
\`\`\`
### User Story
AS A ${responses.role}

I WANT a README generator

SO THAT I can easily put together a good README for a new project

GIVEN the ${responses.role} has a GitHub profile and a repository

WHEN prompted for the ${responses.role}'s GitHub username and repo specific information

THEN a README for the repo is generated.
\`\`\`
---
## License
* ${responses.license}
---
## Contributors
* ${responses.name1}
---
## Test
\`\`\`
${responses.test}
\`\`\`
---
## Questions
* Send Questions to ${responses.name1} at ${responses.email}.
---
`;
}

module.exports = generateMarkdown;
