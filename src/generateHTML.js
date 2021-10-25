function generateEmployeeCards(employees) {
 
    const employeeCards = employees.map((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        return generateManagerCard(employee);
   
      case "Engineer":
       return generateEngineerCard(employee);
      
      case "Intern":
       return generateInternCard(employee);
    
      default:
        throw new Error("Unknown role");
    }
  });
  return employeeCards.join('');
}

function generateManagerCard(manager) {
  return ` <div class="col">
    <div class="card shadow p3 mb5 rounded" id="manager-card" style="width: 18rem">
        <div class="card-header bg-success text-light text-center">
            <h5>${manager.name}</h5>
            <span class="material-icons">person_outline </span>Manager
        </div>

        <ul class="list-group list-group-flush px-2">
            <li class="list-group-item px-2 m-2 border">Id: ${manager.id}</li>
            <li class="list-group-item px-2 m-2 border">
                email: <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li class="list-group-item px-2 m-2 border">
                Office Number: ${manager.officeNumber}
            </li>
        </ul>
    </div>
</div>`;
}

function generateEngineerCard(engineer) {
  return `<div class="col">
    <div class="card shadow p3 mb5 rounded" id="engineer-card" style="width: 18rem">
        <div class="card-header bg-success text-light text-center">
            <h5>${engineer.name}</h5>
            <span class="material-icons">engineering</span> Engineer
        </div>
        <ul class="list-group list-group-flush px-2">
            <li class="list-group-item px-2 m-2 border">Id: ${engineer.id}</li>
            <li class="list-group-item px-2 m-2 border">
                email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </li>
            <li class="list-group-item px-2 m-2 border">
                GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </li>
        </ul>
    </div>
</div>`;
}

function generateInternCard(intern) {
  return `<div class="col">
    <div class="card shadow p3 mb5 rounded" id="intern-card" style="width: 18rem">
        <div class="card-header bg-success text-light text-center">
            <h5>${intern.getName()}</h5>
            <span class="material-icons">school</span> Intern
        </div>
        <ul class="list-group list-group-flush px-2">
            <li class="list-group-item px-2 m-2 border">Id: ${intern.id}</li>
            <li class="list-group-item px-2 m-2 border">
                email: <a href="mailto:${intern.email}">${intern.email}</a>
            </li>
            <li class="list-group-item px-2 m-2 border">School: ${intern.school}</li>
        </ul>
    </div>
</div>`;
}

const generateHTML = (data) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <title>Team Profile</title>
    </head>
    
    <body>
        <nav class="nav-style bg-danger">
            <h1>Team Profile</h1>
            <span class="material-icons"> groups </span>
        </nav>
        <div class="container">
            <div class="row mt-4 mb-4 justify-content-center">
            <!--Employee Cards-->
            ${generateEmployeeCards(data)}
            </div>
        </div>
    </body>
    </html>`;
};

module.exports = generateHTML;
