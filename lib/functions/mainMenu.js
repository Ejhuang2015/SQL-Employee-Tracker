// Dependencies
// =============================================================
const inquirer = require("inquirer");
// const add = require("./add");
const view = require("./view");
// const remove = require("./remove");
// const update = require("./update");

// Functions
// =============================================================
// Main menu prompt
function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "startSelection",
        pageSize: 10,
        message: "What would you like to do?",
        choices: [
            new inquirer.Separator(),
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            new inquirer.Separator(),
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "View All Employees by Manager",
            "View a Department's Total Budget",
            new inquirer.Separator(),
            "Remove a Department",
            "Remove a Role",
            "Remove an Employee",
            new inquirer.Separator(),
            "Update an Employee's Role",
            "Update an Employee's Manager",
            new inquirer.Separator(), // Exit
            "Exit",
        ]
    }).then((res) => {
        switch (res.startSelection) {
            case 'Add a Department':
                // add.addDept();
                break;
            case 'Add a Role':
                // add.addRole();
                break;
            case 'Add an Employee':
                // add.addEmp();
                break;
            case 'View All Departments':
                view.viewDept();
                break;
            case 'View All Roles':
                // view.viewRole();
                break;
            case 'View All Employees':
                view.viewEmp();
                break;
            case 'View All Employees by Manager':
                // view.viewEmpByMana();
                break;
            case "View a Department's Total Budget":
                // view.viewDeptBudget();
                break;
            case 'Remove a Department':
                // remove.removeDept();
                break;
            case 'Remove a Role':
                // remove.removeRole();
                break;
            case 'Remove an Employee':
                // remove.removeEmployee();
                break;
            case "Update an Employee's Role":
                // update.updateRole();
                break;
            case "Update an Employee's Manager":
                // update.updateMana();
                break;
            case "Exit":
                console.log("Thanks for using the Employee Tracker. Goodbye.")
                break;
            default:
                console.log(`Uh oh, you broke me! Tell my creator how I died...`);
        }
    })
};

module.exports = { mainMenu };