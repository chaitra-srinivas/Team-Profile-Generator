// npm modules
const inquirer = require("inquirer");
const fs = require("fs");

// team
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembers = [];

const getManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Team Manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Team Manager's id:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email:",
      },
      {
        type: "number",
        name: "officeNumber",
        message: "Enter Manager's Office Number:",
      },
    ])
    .then((teamManager) => {
      const { id, name, email, officeNumber } = teamManager;
      const Manager = new Manager(id, name, email, officeNumber);
      teamMembers.push(Manager);
      console.log(Manager);
    })
    .catch((err) => console.log(err));
};
