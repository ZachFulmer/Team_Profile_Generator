const inquirer = require("inquirer");


// Parent Class for all Employees
// Engineer/Intern/Manager will all inherit parent properties and methods
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