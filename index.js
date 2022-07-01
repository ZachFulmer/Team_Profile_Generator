const inquirer = require("inquirer");
const Team = require('./lib/Team.js');

// Initialize Application
const test = new Team();
test.createTeam();