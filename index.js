const inquirer = require('inquirer')
const Engineer = require('./engineer')
const Manager = require('./manager')
const Intern = require('./intern')

const team =[];

function askEmployee() {
    inquirer.prompt({
        name: 'newEmployee',
        message: 'What employee would you like to add next ?',
        type: 'input',
    }) .then((answers)=>{
        if (answers.newEmployee=='engineer'){
            createEngineer()
        }
        if (answers.newEmployee=='intern'){
            createIntern()
        }
    })
}

inquirer.prompt ([
    {
        name: 'name',
        message:'Please enter managers name.',
        type: 'input',
    },
    {
        name: 'id',
        message: 'Please enter managers ID',
        type: 'input',
    },
    {
        name: 'email',
        message: 'Please enter managers email',
        type: 'input',
    },
    {
        name: 'officeNumber',
        message: 'Please enter office number',
        type: 'input',
    }
])
.then ((answers)=>{
    const  manager = new Manager(
        answers.name, answers.id, answers.email, answers.officeNumber, 
    )
    team.push(manager);
}) 
function createEngineer() {
    inquirer.prompt([
        {
            name: 'name',
            message:'Please enter managers name.',
            type: 'input',
        },
        {
            name: 'id',
            message: 'Please enter managers ID',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Please enter managers email',
            type: 'input',
        },
        {
            name: 'gitHub',
            message: 'Please enter your github username',
            type: 'input',
        }
    ])
    .then ((answers)=>{
        const  engineer = new Engineer(
            answers.name, answers.id, answers.email, answers.gitHub, 
        )
        team.push(engineer);
    }) 
}
function createIntern() {
    inquirer.prompt([
        {
            name: 'name',
            message:'Please enter managers name.',
            type: 'input',
        },
        {
            name: 'id',
            message: 'Please enter managers ID',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Please enter managers email',
            type: 'input',
        },
        {
            name: 'school',
            message: 'Please enter your github username',
            type: 'input',
        }
    ])
    .then ((answers)=>{
        const  intern = new Intern(
            answers.name, answers.id, answers.email, answers.school, 
        )
        team.push(intern);
    }) 
}