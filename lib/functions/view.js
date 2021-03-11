// Dependencies
// =============================================================
const inquirer = require("inquirer");
const cTable = require("console.table");
// Get access to the database
const db = require("../controller/Database");

// Functions
// =============================================================
// View Department
const viewDept = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try{
        // Grab department data
        const data = await db.getDept();
        // Log the data into a table
        console.table(data);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { viewDept };