const inquirer = require("inquirer");
const Employee = require("./Employee.js");

class Engineer extends Employee
{
    constructor()
    {
        super("Engineer");
    }

    getRole()
    {
        return "Engineer";
    }
}

module.exports = Engineer;