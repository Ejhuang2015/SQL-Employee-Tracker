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
        console.table("\n", data);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// View Employees
const viewEmp = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try{
        // Grab department data
        const data = await db.getEmp();
        // Log the data into a table
        console.table("\n", data);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}

// Export
// =============================================================
// module.exports = { viewDept, viewRole, viewEmp, viewEmpByMana, viewDeptBudget };
module.exports = { viewDept, viewEmp };