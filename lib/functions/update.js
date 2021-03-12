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
        // Empty Array to hold all of the Employee choices
        const empList = [];
        // Grab role data
        const data = await db.getEmp();
        // For each row of data, push the name and id of the department into the empty array
        data.forEach(option => {
            const emp = {
                // Display Employee name but capture the id value
                name: `${option['First Name']} ${option['Last Name']}`,
                value: option.ID,
            }
            empList.push(emp);
        });
        // Empty Array to hold all of the Role choices
        const roleList = [];
        // Grab role data
        const secondData = await db.getRole();
        // For each row of data, push the name and id of the department into the empty array
        secondData.forEach(option => {
            const role = {
                // Display Employee name but capture the id value
                name: option.Position,
                value: option.ID,
            }
            roleList.push(role);
        });
        // Ask for which employee needs to be updated and which role
        const editRole = await inquirer.prompt([
            {
                type: "list",
                name: "emp",
                message: "Which empployee did you want to edit?",
                choices: empList,
            },
            {
                type: "list",
                name: "role",
                message: "Which role did you want to change the employee to?",
                choices: roleList,
            }
        ]);
        // Update the employee with new role
        await db.updateRole(editRole)
        // Log a confirmation message
        console.log(`\nSuccess! The employee has been updated!\n`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { updateRole };