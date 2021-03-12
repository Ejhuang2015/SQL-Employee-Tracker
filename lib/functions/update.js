// Dependencies
// =============================================================
// Allows prompts to user
const inquirer = require("inquirer");
// Allows the console.table function to create tables
const cTable = require("console.table");
// Get access to the database
const db = require("../controller/Database");

// Functions
// =============================================================
// Update Employee Role
const updateRole = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
        // Empty Array to hold all of the Role choices
        const roleList = [];
        // Grab role data
        const data = await db.getRole();
        // For each row of data, push the name and id of the department into the empty array
        data.forEach(option => {
            const role = {
                // Display Role name but capture the id value
                name: option.Position,
                value: option.ID,
            }
            roleList.push(role);
        });
        // Ask for which role needs to be updated and which sections
        const editRole = await inquirer.prompt([
            {
                type: "list",
                name: "role",
                message: "Which role did you want to edit?",
                choices: roleList,
            },
            {
                type: "checkbox",
                name: "updating",
                message: "Which sections did you want to update?",
                choices: ["Title", "Salary", "Department"],
            }
        ]);
        console.log(editRole);

        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { updateRole };