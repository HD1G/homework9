const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    //add questions
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

{
    type: "input",
    name: "title",
    message: "What is the name of your project?"
},

{
    type: "input",
    name: "description",
    message: "Write a description of your project"
},

{
    type: "list",
    name: "license",
    message: "What kind of license will you use for your project?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0" , "NONE"]
},

{
    type: "input",
    name: "installation",
    message: "What command should be used to install dependencies?",
  },
  
  {
    type: "input",
    name: "test",
    message: "What command will be used to run tests?",
  },
  
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about the repo?",
  },
  
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about making contributions to the repo?",
  }

];

function writeToFile(fileName, data) {
    //setup writefile
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    //build out intialize
inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("searching...");

    api
    .getUser(inquirerResponses.github)
    .then(({data}) => {
        writeToFile("README.md", generateMarkdown({...inquirerResponses, ...data}));
    })
})
}

init();
