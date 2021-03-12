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
        // For each row of data, push the name and id of the employee into the empty array
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
        // For each row of data, push the name and id of the rolent into the empty array
        secondData.forEach(option => {
            const role = {
                // Display Role name but capture the id value
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
                message: "Which employee did you want to edit?",
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

// Update Employee Manager
const updateMana = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
        // Empty Array to hold all of the Employee choices
        const empList = [];
        // Grab role data
        const data = await db.getEmp();
        // For each row of data, push the name and id of the employee into the empty array
        data.forEach(option => {
            const emp = {
                // Display Employee name but capture the id value
                name: `${option['First Name']} ${option['Last Name']}`,
                value: option.ID,
            }
            empList.push(emp);
        });
        // Ask for which employee needs to be updated
        const selectEmp = await inquirer.prompt([
            {
                type: "list",
                name: "name",
                message: "Which employee did you want to edit?",
                choices: empList,
            }
        ]);
        // Empty Array to hold all of the Manager choices
        const manaList = [];
        // Grab role data
        const secondData = await db.getMana();
        // For each row of data, push the name and id of the manager into the empty array unless the manager is the employee
        secondData.forEach(option => {
            if (selectEmp.name != option.ID) {
                const mana = {
                    // Display Manager name but capture the id value
                    name: `${option.Managers}`,
                    value: option.ID,
                }
                manaList.push(mana);
            }
        });
        // Push a no manager option into the list
        manaList.push({name: "None", value: "-1"})
        // Ask for which manager will be assigned to the employee
        const editMana = await inquirer.prompt([
            {
                type: "list",
                name: "name",
                message: "Who will be the employee's new manager?",
                choices: manaList,
            }
        ]);
        // Update the employee with new role
        await db.updateMana(selectEmp,editMana)
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
module.exports = { updateRole, updateMana };