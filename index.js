const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const dotenv = require("dotenv");
//const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name1",
      message: "Please Enter Your Name:",
    },
    {
      type: "input",
      name: "email",
      message: "What is your preferred e-mail address?",
    },
    {
      type: "input",
      message: "Enter your GitHub username:",
      name: "username",
    },
    {
      type: "input",
      name: "title",
      message: "Give your project a title:",
    },
    {
      type: "input",
      name: "description",
      message: "Write a short description of your project:",
    },
    {
      type: "input",
      name: "role",
      message: "What is your role?",
    },
    {
      //this should be a multiple choice
      type: "input",
      name: "languages",
      message: "What languages are you using?",
    },
    {
      type: "input",
      name: "installation",
      message: "To install necessary dependencies, run the following command:",
    },
    {
      type: "input",
      name: "license",
      message: "Licensing?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the purpose of your project?",
    },
    {
      type: "input",
      name: "demo",
      message: "Provide a Demo Gif file name:",
    },
    {
      type: "input",
      name: "test",
      message: "To run tests, run the following command:",
    },
  ]);
}

promptUser()
  .then((responses) => {
    const md = generateMarkdown(responses);
    return writeFileAsync("README2.md", md);
  })
  .then(() => {
    console.log("Successfully wrote to README.md");
  })
  .catch((err) => {
    console.log(err);
  });

//.then((responses) => {
//  fs.writeFile(
//    "user.json",
//    JSON.stringify(responses, null, "\t"),
//    (err) => {
//      if (err) {
//        return console.error(err);
//      }
//      console.log("Responses Saved!");
//    }
//  );
//});

//function writeToFile(fileName, data) {}
//
//console.log(writeToFile);

//async function init() {
//  console.log("hi");
//  try {
//    const data = await promptUser();
//    const md = generateMarkdown(data);
//    await writeFileAsync("README.md", md);
//    console.log("Successfully wrote to Markdown File.");
//  } catch (err) {
//    console.log(err);
//  }
//}

//init();

//const questions = []
