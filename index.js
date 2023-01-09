const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer')
const Engineer = require('./engineer')
const Manager = require('./manager')
const Intern = require('./intern')
const generateHtml = require('./generateHtml')

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
        else if (answers.newEmployee=='intern'){
            createIntern()
        } else{
            fs.writeFileSync('index.html', generateHtml(team), "utf-8");

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
    askEmployee()
}) 
function createEngineer() {
    inquirer.prompt([
        {
            name: 'name',
            message:'Please enter engineers name.',
            type: 'input',
        },
        {
            name: 'id',
            message: 'Please enter engineers ID',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Please enter engineers email',
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
        askEmployee()
    }) 
}
function createIntern() {
    inquirer.prompt([
        {
            name: 'name',
            message:'Please enter interns name.',
            type: 'input',
        },
        {
            name: 'id',
            message: 'Please enter interns ID',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Please enter interns email',
            type: 'input',
        },
        {
            name: 'school',
            message: 'Please enter your school name',
            type: 'input',
        }
    ])
    .then ((answers)=>{
        const  intern = new Intern(
            answers.name, answers.id, answers.email, answers.school, 
        )
        team.push(intern);
        askEmployee()
    }) 
}