// Dependencies
// =============================================================
const inquirer = require("inquirer");
const cTable = require("console.table");
// Get access to the database
const db = require("../controller/Database");

// Functions
// =============================================================
// Add Department
const addDept = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try{

        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { addDept, addRole, addEmp };