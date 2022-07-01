const inquirer = require("inquirer");

class Employee
{
    constructor(inName, inId, inEmail)
    {
        this.name = inName;
        this.id = inId;
        this.email = inEmail;
    };

    getName()
    {
        return this.name;
    };

    getId()
    {
        return this.id;
    };

    getEmail()
    {
        return this.email;
    };

    getRole()
    {
        return "Employee";
    };
}

module.exports = Employee;