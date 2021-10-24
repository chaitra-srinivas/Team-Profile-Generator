function generateManagerCard() {
  return ` <div class="col">
    <div class="card" id="manager-card" style="width: 18rem">
        <div class="card-header bg-success text-light text-center">
            <h5>Calvin</h5>
            <span class="material-icons">person_outline </span>Manager
        </div>

        <ul class="list-group list-group-flush px-2">
            <li class="list-group-item px-2 m-2 border">Id: 1</li>
            <li class="list-group-item px-2 m-2 border">
                email: calvin@officemail.com
            </li>
            <li class="list-group-item px-2 m-2 border">
                Office Number: 223280084
            </li>
        </ul>
    </div>
</div>`;
}

function generateEngineerCard() {
  return `<div class="col">
    <div class="card margin-style" id="engineer-card" style="width: 18rem">
        <div class="card-header bg-success text-light text-center">
            <h5>Dennis</h5>
            <span class="material-icons">engineering</span> Engineer
        </div>
        <ul class="list-group list-group-flush px-2">
            <li class="list-group-item px-2 m-2 border">Id: 2</li>
            <li class="list-group-item px-2 m-2 border">
                email: dennis@engmail.com
            </li>
            <li class="list-group-item px-2 m-2 border">
                GitHub: dennis-menace
            </li>
        </ul>
    </div>
</div>`;
}

function generateInternCard() {
  return `<div class="col">
    <div class="card margin-style" id="intern-card" style="width: 18rem">
        <div class="card-header bg-success text-light text-center">
            <h5>Garfield</h5>
            <span class="material-icons">school</span> Intern
        </div>
        <ul class="list-group list-group-flush px-2">
            <li class="list-group-item px-2 m-2 border">Id: 3</li>
            <li class="list-group-item px-2 m-2 border">
                email: garfield@rmit.com
            </li>
            <li class="list-group-item px-2 m-2 border">School: RMIT</li>
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
            <div class="row mt-4 justify-content-center">
            <!--Employee Cards-->
                
            </div>
        </div>
    </body>
    </html>`;
};

module.exports = generateHTML;