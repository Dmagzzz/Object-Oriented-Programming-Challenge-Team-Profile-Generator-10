const Manager = require("./manager")

const generateHtml= team=>{
    const createManagerHtml=manager=>(`
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a
                    href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">officeNumber: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>
    `)

    const createEngineerHtml=engineer=>(`
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a
                    href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">gitHub: ${engineer.gitHub}</li>
        </ul>
    </div>
</div>
    `)

    const createInternHtml=intern=>(`
    <div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a
                    href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">school: ${intern.school}</li>
        </ul>
    </div>
</div>
    `)

    const html=[
        
    ]
    html.push(team.filter(employee=>employee.getRole()==='manager')).map(manager=>createManagerHtml(manager))

    html.push(team.filter(employee=>employee.getRole()==='engineer')).map(engineer=>createEngineerHtml(engineer))

    html.push(team.filter(employee=>employee.getRole()==='intern')).map(intern=>createInternHtml(intern))

}

module.exports=team=>(
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Squad</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">Our Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${generateHtml(team)}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
)