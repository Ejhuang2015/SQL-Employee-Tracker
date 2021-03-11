// Dependencies
// =============================================================
const inquirer = require("inquirer");
// const connection = require("../../config/connection");
const view = require("./view");

// Functions
// =============================================================
// Inquirer Prompt template
const promptInq = (questions) => {
    return inquirer.prompt(questions);
};

// Main Menu Question
const startQuestions = {
    type: "list",
    name: "startSelection",
    pageSize: 20,
    message: "What would you like to do?",
    choices: [
        new inquirer.Separator(), // Add functions
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        new inquirer.Separator(), // View functions
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "View All Employees by Manager",
        "View a Department's Total Budget",
        new inquirer.Separator(), // Remove functions
        "Remove a Department",
        "Remove a Role",
        "Remove an Employee",
        new inquirer.Separator(), // Update functions
        "Update an Employee's Role",
        "Update an Employee's Manager",
        new inquirer.Separator(), // Exit
        "Exit",
        new inquirer.Separator()
    ]
};

// Main menu action based on user's selection
async function mainMenu() {
    try {
        console.log("Hello!");
        const menuPrompt = await promptInq(startQuestions);

        switch (menuPrompt.startSelection) {
            case 'Add a Department':
                // 
                break;
            case 'Add a Role':
                //   
                break;
            case 'Add an Employee':
                // 
                break;
            case 'View All Departments':
                view.viewDept();
                break;
            case 'View All Roles':
                //   
                break;
            case 'View All Employees':
                //   
                break;
            case 'View All Employees by Manager':
                //  
                break;
            case "View a Department's Total Budget":
                //   
                break;
            case 'Remove a Department':
                //  
                break;
            case 'Remove a Role':
                //   
                break;
            case 'Remove an Employee':
                //   
                break;
            case "Update an Employee's Role":
                //  
                break;
            case "Update an Employee's Manager":
                //   
                break;
            case "Exit":
                console.log("Thanks for using the Employee Tracker. Goodbye.")
                connection.end();
                break;
            default:
                console.log(`Uh oh, you broke me! Tell my creator how I died...`);
        }
    } catch (err) {
        console.log(err);
    }
};

// Export
// =============================================================
module.exports = { mainMenu, promptInq };