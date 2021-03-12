// Dependencies
// =============================================================
// Allows prompts to user
const inquirer = require("inquirer");
// Get access to the database
const db = require("../controller/Database");

// Functions
// =============================================================
// Add Department
const addDept = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try{
        // Ask for the name of the new Department being added
        const newDept = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What Department did you want to add?",
            }
        ]);
        // Add the new department
        await db.addDept(newDept);
        // Log a confirmation message
        console.log(`Success! ${newDept.name} has been added!`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { addDept };
// , addRole, addEmp