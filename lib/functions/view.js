// Dependencies
// =============================================================
const inquirer = require("inquirer");
const cTable = require("console.table");
// Get access to the database
const db = require("../controller/Database");
// Get access to the main menu function
const menu = require("./mainMenu");

// Functions
// =============================================================
// View Department
const viewDept = async () => {
    try{
        const data = await db.getDept();
        console.table(data);
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { viewDept };