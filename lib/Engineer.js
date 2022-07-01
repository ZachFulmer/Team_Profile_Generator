const inquirer = require("inquirer");
const Employee = require("./Employee.js");

class Engineer extends Employee
{
    constructor(inName, inId, inEmail, inGithub)
    {
        super(inName, inId, inEmail);

        this.github = inGithub;
    }

    getGithub()
    {
        return this.github;
    }

    getRole()
    {
        return "Engineer";
    }
}

module.exports = Engineer;