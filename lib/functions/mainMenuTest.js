// Dependencies
// =============================================================
const inquirer = require("inquirer");
// const connection = require("../../config/connection");

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
            "Exit"
        ]
    }).then((res) => {
        switch (res.startSelection) {
            case 'Add a Department':
                //   artistSearch();
                break;
            case 'Add a Role':
                //   multiSearch();
                break;
            case 'Add an Employee':
                //   rangeSearch();
                break;
            case 'View All Departments':
                //   songSearch();
                break;
            case 'View All Roles':
                //   songAndAlbumSearch();
                break;
            case 'View All Employees':
                //   songAndAlbumSearch();
                break;
            case 'View All Employees by Manager':
                //   songAndAlbumSearch();
                break;
            case "View a Department's Total Budget":
                //   songAndAlbumSearch();
                break;
            case 'Remove a Department':
                //   songSearch();
                break;
            case 'Remove a Role':
                //   songAndAlbumSearch();
                break;
            case 'Remove an Employee':
                //   songAndAlbumSearch();
                break;
            case "Update an Employee's Role":
                //   songSearch();
                break;
            case "Update an Employee's Manager":
                //   songAndAlbumSearch();
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