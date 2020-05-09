//const userInfo = require("./user.json");

function generateMarkdown(data) {
  return `
# ${data.title}\n
${data.description}\n
\n
## Table of Contents\n
  *
  *
  * 
  * 
  * 
## ${data.installation}
## ${data.usage}
## ${data.license}
## ${data.contributing}
## ${data.tests}
## ${data.questions}

`;
}
console.log(data);

module.exports = generateMarkdown;
