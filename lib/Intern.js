const inquirer = require("inquirer");
const Employee = require("./Employee.js");

// Intern object class that also inherits the Employee Parent class properties and methods
class Intern extends Employee
{
    constructor(inName, inId, inEmail, inSchool)
    {
        super(inName, inId, inEmail);

        this.school = inSchool;
    }

    getSchool()
    {
        return this.school;
    }

    getRole()
    {
        return "Intern";
    }
}

module.exports = Intern;