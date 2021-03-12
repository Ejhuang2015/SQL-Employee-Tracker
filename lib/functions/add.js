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
const addRole = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try{
        // Empty Array to hold all of the Department choices
        const deptList = [];
        // Grab department data
        const data = await db.getDept();
        // For each row of data, push the name and id of the department into the empty array
        data.forEach(option => {
            const department = {
                // Display Department name but capture the id value
                name: option.Department,
                value: option.ID,
            }
            deptList.push(department);
        });
        // Ask for the details of the new Role being added
        const newRole = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What role did you want to add?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for this role?",
                // Check to see if input is a numeric integer/decimal
                validate: function (value) {
                    var pass = value.search(/^\d+(,\d{3})*(\.\d*)?$/) >= 0;
                    if (pass) { return true; }
                    return 'Please enter a valid salary. Do not include the currency symbol.';
                }
            },
            {
                type: "list",
                name: "department",
                message: "Which department does this role belong to?",
                choices: deptList,
            }
        ]);
        // Add the new role
        await db.addRole(newRole);
        // Log a confirmation message
        console.log(`Success! ${newRole.title} has been added!`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { addDept, addRole };
// , addEmp