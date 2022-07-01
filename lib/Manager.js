const inquirer = require("inquirer");
const Employee = require("./Employee.js");

// Manager object class that also inherits the Employee Parent class properties and methods
class Manager extends Employee
{
    constructor(inName, inId, inEmail, inOffice)
    {
        super(inName, inId, inEmail);

        this.officeNumber = inOffice;
    }

    getRole()
    {
        return "Manager";
    }
}

module.exports = Manager;