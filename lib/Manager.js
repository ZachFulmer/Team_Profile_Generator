const inquirer = require("inquirer");
const Employee = require("./Employee.js");

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