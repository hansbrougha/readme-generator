//const userInfo = require("./user.json");

function generateMarkdown(responses) {
  return `
# ${responses.title}\n
${responses.description}\n
\n
## Table of Contents\n
  *
  *
  * 
  * 
  * 
## ${responses.installation}
## ${responses.usage}
## ${responses.license}
## ${responses.contributing}
## ${responses.tests}
## ${responses.questions}

`;
}

module.exports = generateMarkdown;
