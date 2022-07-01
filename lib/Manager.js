const inquirer = require("inquirer");
const Employee = require("./Employee.js");

class Manager extends Employee
{
    constructor()
    {
        super("Manager");
    }

    getRole()
    {
        return "Manager";
    }
}

module.exports = Manager;