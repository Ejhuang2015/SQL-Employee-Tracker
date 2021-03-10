// Dependencies
// =============================================================
const inquirer = require("inquirer");
// Get access to the database
const db = require("../databaseController/trackerController");
// Get access to the main menu function inside the index.js file
const { mainMenu } = require("../../index");