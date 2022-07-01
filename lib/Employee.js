const inquirer = require("inquirer");

class Employee
{
    constructor(role = "")
    {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the " + role + "'s name?",
                validate: nameInput => 
                {
                    if (nameInput) 
                    {
                        return true;
                    } 
                    else 
                    {
                        console.log("Please enter the " + role + "'s name!");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the " + role + "'s ID number?",
                validate: idInput => 
                {
                    if (idInput > 0) 
                    {
                        return true;
                    } 
                    else 
                    {
                        console.log('Please enter a valid ID number greater than 0!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the " + role + "'s email?",
                validate: nameInput => 
                {
                    if (nameInput) 
                    {
                        return true;
                    } 
                    else 
                    {
                        console.log('Please enter a valid email!');
                        return false;
                    }
                }
            }
        ]).then((answers) => 
        {
            this.name = answers.name;
            this.id = answers.id;
            this.email = answers.email;
        }).then(() =>
        {
            if(role == "Manager")
            {
                inquirer.prompt([
                    {
                        type: "number",
                        name: "office",
                        message: "What is the Manager's office number?",
                        validate: officeInput =>
                        {
                            if(officeInput > 0)
                            {
                                return true;
                            }
                            else
                            {
                                console.log("Please enter a valid office number greater than 0!");
                                return false;
                            }
                        }
                    }
                ]).then((answer) =>
                {
                    this.officeNumber = answer.office;
                    console.log(this.name);
                    console.log(this.id);
                    console.log(this.email);
                    console.log(this.officeNumber);
                });
            }
            else if(role == "Engineer")
            {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "What is the Engineer's GitHub username?",
                        validate: gitInput =>
                        {
                            if(gitInput)
                            {
                                return true;
                            }
                            else
                            {
                                console.log("Please enter a valid GitHub username!");
                                return false;
                            }
                        }
                    }
                ]).then((answer) =>
                {
                    this.github = answer.github;
                    console.log(this.name);
                    console.log(this.id);
                    console.log(this.email);
                    console.log(this.github);
                });

            }
            else
            {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "What school does the Intern go to?",
                        validate: schoolInput =>
                        {
                            if(schoolInput)
                            {
                                return true;
                            }
                            else
                            {
                                console.log("Please enter a valid school name!");
                                return false;
                            }
                        }
                    }
                ]).then((answer) =>
                {
                    this.school = answer.school;
                    console.log(this.name);
                    console.log(this.id);
                    console.log(this.email);
                    console.log(this.school);
                });

            }
        });
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