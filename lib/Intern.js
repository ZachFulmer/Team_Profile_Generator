const inquirer = require("inquirer");
const Employee = require("./Employee.js");

class Intern extends Employee
{
    constructor()
    {
        super("Intern");
    }

    getRole()
    {
        return "Intern";
    }
}

module.exports = Intern;