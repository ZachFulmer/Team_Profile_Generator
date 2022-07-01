require('events').defaultMaxListeners = 100;
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const Manager = require("./Manager.js");

class Team
{
    constructor()
    {
        this.team = [];
    }

    createTeam()
    {
        inquirer.prompt([
            {
                type: "confirm",
                name: "teamconfirm",
                message: "Would you like to create a Team Profile?"
            }
        ]).then((answer) =>
        {
            if(answer.teamconfirm)
            {
                this.addTeamMember("Manager");
            }
            else
            {
                console.log("--Team Profile Generator Aborted--");
            }
        });
    }

    addTeamMember(role)
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
        ]).then((employeeAnswers) => 
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
                ]).then((managerAnswer) =>
                {
                    this.team.push(new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, managerAnswer.office));
                
                    inquirer.prompt([
                        {
                            type: "list",
                            name: "choice",
                            message: "Would you like to add another team member?",
                            choices: ["Engineer","Intern","No"]
                        }]).then((answer) =>
                        {
                            if(answer.choice == "Engineer")
                            {
                                this.addTeamMember("Engineer");
                            }
                            else if(answer.choice == "Intern")
                            {
                                this.addTeamMember("Intern");
                            }
                            else
                            {
                                this.generateHTML();
                            }
                        });
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
                ]).then((engineerAnswer) =>
                {
                    this.team.push(new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, engineerAnswer.github));

                    inquirer.prompt([
                        {
                            type: "list",
                            name: "choice",
                            message: "Would you like to add another team member?",
                            choices: ["Engineer","Intern","No"]
                        }]).then((answer) =>
                        {
                            if(answer.choice == "Engineer")
                            {
                                this.addTeamMember("Engineer");
                            }
                            else if(answer.choice == "Intern")
                            {
                                this.addTeamMember("Intern");
                            }
                            else
                            {
                                this.generateHTML();
                            }
                        });
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
                ]).then((internAnswer) =>
                {
                    this.team.push(new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, internAnswer.school));

                    inquirer.prompt([
                        {
                            type: "list",
                            name: "choice",
                            message: "Would you like to add another team member?",
                            choices: ["Engineer","Intern","No"]
                        }]).then((answer) =>
                        {
                            if(answer.choice == "Engineer")
                            {
                                this.addTeamMember("Engineer");
                            }
                            else if(answer.choice == "Intern")
                            {
                                this.addTeamMember("Intern");
                            }
                            else
                            {
                                this.generateHTML();
                            }
                        });
                });

            }
        });

    }

    getCardIcon(role)
    {
        if(role == "Manager")
        {
            return `<div class="fs-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
            </svg>
            Manager
          </div>`;
        }
        else if(role == "Engineer")
        {
            return `<div class="fs-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
            </svg>
            Engineer
          </div>`;
        }
        else
        {
            return `<div class="fs-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
            </svg>
            Intern
        </div>`;
        }
    }

    getRoleProperty(role, element)
    {
        if(role == "Manager")
        {
            return `Office Number: ${this.team[element].officeNumber}`;
        }
        else if(role == "Engineer")
        {
            return `GitHub: <a href="https://github.com/${this.team[element].github}">${this.team[element].github}</a>`;
        }
        else
        {
            return `School: ${this.team[element].school}`;
        }
    }

    generateHTML()
    {
        let pageHTML = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Profile Generator</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            </head>
            <header class="bg-danger text-white py-5 text-center">
                <h1>My Team</h1>
            </header>
            <body>
                <div class="container mt-5">
                    <div class="row justify-content-center">`;
        for(let i = 0; i < this.team.length; i++)
        {
            pageHTML += `<div class="col-4 my-5">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body text-bg-primary">
                                <h2 class="card-title">${this.team[i].name}</h2>
                                    ${this.getCardIcon(this.team[i].constructor.name)}
                                </div>
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${this.team[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${this.team[i].email}">${this.team[i].email}</a></li>
                                <li class="list-group-item">${this.getRoleProperty(this.team[i].constructor.name, i)}</li>
                                </ul>
                            </div>
                        </div>`;
        }
        
        pageHTML += `</div>
                </div>
            </body>
        </html>`;

        fs.writeFile("./dist/index.html", pageHTML, (err) =>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("File Created Successfully!")
            }
        });
    }
}

module.exports = Team;