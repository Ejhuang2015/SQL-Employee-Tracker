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
    try{
        const data = await db.getDept();
        console.table(data);
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { viewDept };