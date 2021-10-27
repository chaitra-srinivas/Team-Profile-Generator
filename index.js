// npm modules
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");
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
        validate: (name) => {
          if (!name) {
            return "Please enter Manager's name!";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter Team Manager's id:",
        validate: (id) => {
          if (isNaN(id) || !id) {
            return "Please enter a valid number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email:",
        validate: (email) => {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager's Office Number:",
        validate: (officeNumber) => {
          if (isNaN(officeNumber) || !officeNumber) {
            return "Please enter a valid phone number";
          } else {
            return true;
          }
        },
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
        validate: (id) => {
          if (isNaN(id) || !id) {
            return "Please enter a valid number";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name:",
        validate: (name) => {
          if (!name) {
            return "Please enter Manager's name!";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email:",
        validate: (email) => {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        when: (input) => input.role === "Engineer",
        message: "Enter Engineer's GitHub profile:",
        validate: (github) => {
          if (!github) {
            return "Please enter a valid GitHub profile";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "school",
        when: (input) => input.role === "Intern",
        message: "Enter Inter's School",
        validate: (school) => {
          if (!school) {
            return "Please enter a school's name";
          } else {
            return true;
          }
        },
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
    fs.writeFileSync("./dist/index.html", generateHTML(teamProfile));
    console.log("Successfully generated team profile!");
    //return console.log(teamProfile);
  })
  .catch((err) => {
    console.log(err);
  });
