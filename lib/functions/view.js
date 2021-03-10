// Dependencies
// =============================================================
// const inquirer = require("inquirer");
const table = require("console.table");
// Get access to the database
const db = require("../databaseController/trackerController");
// Get access to the main menu function inside the index.js file
const { mainMenu } = require("../../index");

// Functions
// =============================================================
// View Department
function dept() {
    const deptList = db.viewDept();
    deptList.then((res) => {
        console.log("All Departments:")
        table(res);
        mainMenu();
    })
}

// Export
// =============================================================
module.exports = { dept };