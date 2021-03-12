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
// Remove Department
const removeDept = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
        // Empty Array to hold all of the Department choices'
        const choices = [];
        // Grab department data
        const data = await db.getDept();
        // For each row of data, push the name and id of the department into the empty array
        data.forEach(option => {
            const department = {
                // Display Department name but capture the id value
                name: option.Department,
                value: option.ID,
            }
            choices.push(department);
        });
        // Warning about deleting
        console.log("\nWarning! Deleting a department will also delete all associated roles and employees!\n");
        // Prompt user to choose a Department
        const chosenSelection = await inquirer.prompt([
            {
                type: "list",
                name: "id",
                message: "Which Department do you want to delete?",
                choices: choices,
            }
        ]);
        // Grab the total Budget from the selected Department id
        await db.removeDept(chosenSelection.id);
        // Log a confirmation message
        console.log(`\nSuccess! The department has been removed!\n`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}

// Remove Role
const removeRole = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
        // Empty Array to hold all of the Department choices'
        const choices = [];
        // Grab department data
        const data = await db.getRole();
        // For each row of data, push the name and id of the department into the empty array
        data.forEach(option => {
            const role = {
                // Display Department name but capture the id value
                name: option.Position,
                value: option.ID,
            }
            choices.push(role);
        });
        // Warning about deleting
        console.log("\nWarning! Deleting a role will also delete all associated employees!\n");
        // Prompt user to choose a Department
        const chosenSelection = await inquirer.prompt([
            {
                type: "list",
                name: "id",
                message: "Which Role do you want to delete?",
                choices: choices,
            }
        ]);
        // Grab the total Budget from the selected Department id
        await db.removeRole(chosenSelection.id);
        // Log a confirmation message
        console.log(`\nSuccess! The role has been removed!\n`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}

// Remove Employee
const removeEmp = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
        // Empty Array to hold all of the Department choices'
        const choices = [];
        // Grab department data
        const data = await db.getEmp();
        // For each row of data, push the name and id of the department into the empty array
        data.forEach(option => {
            const employee = {
                // Display Department name but capture the id value
                name: `${option['First Name']} ${option['Last Name']}`,
                value: option.ID,
            }
            choices.push(employee);
        });
        // Prompt user to choose a Department
        const chosenSelection = await inquirer.prompt([
            {
                type: "list",
                name: "id",
                message: "Which Employee do you want to delete?",
                choices: choices,
            }
        ]);
        // Grab the total Budget from the selected Department id
        await db.removeEmp(chosenSelection.id);
        // Log a confirmation message
        console.log(`\nSuccess! The employee has been removed!\n`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { removeDept, removeRole, removeEmp };