// npm modules
const inquirer = require("inquirer");
const fs = require("fs");

// team

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

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
    .then((managerDetails) => {
      const manager = new Manager(
        managerDetails.id,
        managerDetails.name,
        managerDetails.email,
        managerDetails.officeNumber
      );
      teamMembers.push(manager);
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
        choices: ["Engineer", "Intern"],
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
        when: (input) => input.role === "Engineer",
        message: "Enter Engineer's GitHub profile:",
      },
      {
        type: "input",
        name: "school",
        when: (input) => input.role === "Intern",
        message: "Enter Inter's School",
      },
      {
        type: "confirm",
        name: "addMoreEmployees",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeDetails) => {
      let { id, name, email, role, github, school, addMoreEmployees } =
        employeeDetails;

      switch (role) {
        case "Engineer":
          const engineer = new Engineer(id, name, email, github);
          teamMembers.push(engineer);
          break;
        case "Intern":
          const intern = new Intern(id, name, email, school);
          teamMembers.push(intern);
          break;
      }
     
      if (addMoreEmployees) {
        return getEmployeeDetails(teamMembers);
      } else {
        return teamMembers;
      }
    })
    .catch((err) => console.log(err));
};

getManagerDetails()
  .then(getEmployeeDetails)
  .then((teamProfile) => {
    return console.log(teamProfile);
  })
  .catch((err) => {
    console.log(err);
  });
