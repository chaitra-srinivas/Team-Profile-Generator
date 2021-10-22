// npm modules
const inquirer = require("inquirer");
const fs = require("fs");

// team

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembers = [];

const getManagerDetails = () => {
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
      const Manager = new Manager(teamManager.id, teamManager.name, teamManager.email, teamManager.officeNumber);
      teamMembers.push(Manager);
      console.log(Manager);
    })
    .catch((err) => console.log(err));
};

const getEmployeeDetails = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role:",
        choices: ['Engineer','Intern'],
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's id:",
      },
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email:",
      },
      {
        type: "input",
        name: "github",
        when: (input) => input.role === 'Engineer',
        message: "Enter Engineer's GitHub profile:",
      },
      {
        type: "input",
        name: "school",
        when: (input) => input.role === 'Intern',
        message: "Enter Inter's School",
      },
    ])
    .then((teamEmployee) => {
      switch (teamEmployee.role){
        case 'Engineer':
          const engineer = new Engineer(teamEmployee.id, teamEmployee.name, teamEmployee.email, teamEmployee.github);
          teamMembers.push(engineer);
          break;
          case 'Intern':
            const intern = new Intern(teamEmployee.id, teamEmployee.name, teamEmployee.email, teamEmployee.school);
            teamMembers.push(intern);
            break;
      }

    })
    .catch((err) => console.log(err));
};
