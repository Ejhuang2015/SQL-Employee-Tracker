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
    try {
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
        console.log(`\nSuccess! ${newDept.name} has been added!\n`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}

// Add Role
const addRole = async () => {
    // Get access to the main menu function
    const menu = require("./mainMenu");
    try {
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
                pageSize: 10,
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
                pageSize: 10,
                message: "Which department does this role belong to?",
                choices: deptList,
            }
        ]);
        // Add the new role
        await db.addRole(newRole);
        // Log a confirmation message
        console.log(`\nSuccess! ${newRole.title} has been added!\n`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}

// Add Employee
const addEmp = async () => {
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
        // Empty Array to hold all of the Manager choices
        const manaList = [];
        // Grab role data
        const secondData = await db.getMana();
        // For each row of data, push the name and id of the department into the empty array
        secondData.forEach(option => {
            const mana = {
                // Display Role name but capture the id value
                name: option.Managers,
                value: option.ID,
            }
            manaList.push(mana);
        });
        // Push a no manager option into the list
        manaList.push({name: "None", value: "-1"})
        // Ask for the details of the new Role being added
        const newEmp = await inquirer.prompt([
            {
                type: "input",
                name: "first",
                message: "What is the first name of the new Employee?",
            },
            {
                type: "input",
                name: "last",
                message: "And the last name of the new Employee?",
            },
            {
                type: "list",
                name: "role",
                message: "What is the role of this new Employee?",
                choices: roleList,
            },
            {
                type: "list",
                name: "manager",
                message: "Who is the manager of this new Employee?",
                choices: manaList,
            }
        ]);
        // Add the new employee
        await db.addEmp(newEmp);
        // Log a confirmation message
        console.log(`\nSuccess! ${newEmp.first} ${newEmp.last} has been added!\n`);
        // Return to main menu
        menu.mainMenu();
    } catch (err) {
        console.log(err);
    }
}
// Export
// =============================================================
module.exports = { addDept, addRole, addEmp };