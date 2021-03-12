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
// View Department
const viewDept = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
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
// View Roles
const viewRole = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
        // Grab role data
        const data = await db.getRole();
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
    try {
        // Grab employee data
        const data = await db.getEmp();
        // Log the data into a table
        console.table("\n", data);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// View Employees by Manager
const viewEmpByMana = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
        // Empty Array to hold all of the Manager choices
        const choices = [];
        // Grab all managers
        const data = await db.getMana();
        // For each row of data, push the name and id of the manager into the empty array
        data.forEach(option => {
            const manager = {
                // Display Manager name but capture the id value
                name: option.Managers,
                value: option.id,
            }
            choices.push(manager);
        });
        // Prompt user to choose a Manager
        const chosenSelection = await inquirer.prompt([
            {
                type: "list",
                name: "id",
                message: "Which Manager do you want to see the Employees of?",
                choices: choices,
            }
        ]);
        // Grab all Employees under selected Manager id
        const secondData = await db.getEmpByMana(chosenSelection.id);
        // Log the data into a table or print an error message if the first item returns null
        if (secondData.length === 0){
            console.log("\nThis manager does not have any employees!\n");
        } else {
            console.table("\n", secondData);
        }
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// View Total Budget of a Department
const viewDeptBudget = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try{
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
        // Prompt user to choose a Department
        const chosenSelection = await inquirer.prompt([
            {
                type: "list",
                name: "id",
                message: "Which Department do you want to see the Budget for?",
                choices: choices,
            }
        ]);
        // Grab the total Budget from the selected Department id
        const secondData = await db.getDeptBudget(chosenSelection.id);
        // Log the data into a table or print an error message if the first item returns null
        if (secondData[0].Department == null){
            console.log("\nThis department does not have any employees!\n");
        } else {
            console.table("\n", secondData);
        }
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}

// Export
// =============================================================
module.exports = { viewDept, viewEmp, viewRole, viewEmpByMana, viewDeptBudget };