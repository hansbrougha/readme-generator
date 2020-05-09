const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const dotenv = require("dotenv");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

//console.log(generateMarkdown);
//console.log(util);
//console.log(fs);
//console.log(dotenv);
//console.log(inquirer);
const writeFileAsync = util.promisify(fs.writeFile);

//const questions = []
function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name1",
        message: "What is your first name? ",
      },
      {
        type: "input",
        name: "name2",
        message: "What is your last name? ",
      },
      {
        type: "input",
        name: "email",
        message: "What is your preferred e-mail address?",
      },
      {
        type: "input",
        name: "title",
        message: "Give your project a title: ",
      },
      {
        type: "input",
        name: "description",
        message: "Write a short description of your project: ",
      },
      {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username",
      },
      {
        type: "input",
        name: "license",
        message: "License?",
      },
      {
        type: "input",
        name: "license",
        message: "License?",
      },
    ])
    .then((responses) => {
      fs.writeFile(
        "user.json",
        JSON.stringify(responses, null, "\t"),
        (err) => {
          if (err) {
            return console.error(err);
          }
          console.log("Responses Saved!");
        }
      );
    });
}

//function writeToFile(fileName, data) {}
//
//console.log(writeToFile);

async function init() {
  console.log("hi");
  try {
    const data = await promptUser();
    const md = generateMarkdown(data);
    await writeFileAsync("README.md", md);
    console.log("Successfully wrote to Markdown File.");
  } catch(err) => {
    console.error(err);
  }
}

init();

//promptUser()
//  .then(function(answers) {
//    const md = generateMarkdown(answers);
//    return writeFileAsync("README.md", md);
//  }).then(() => {
//    console.log("Successfully wrote to README.md.");
//  }).catch(err) => {
//    console.error(err);
//  });
