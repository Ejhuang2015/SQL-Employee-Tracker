// Dependencies
// =============================================================
const inquirer = require("inquirer");

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
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            new inquirer.Separator(),
            "View All Departments",
            "View All Roles",
            "View All Employees",
            new inquirer.Separator(),
            "Remove a Department",
            "Remove a Role",
            "Remove an Employee",
            new inquirer.Separator(),
            "Update an Employee's Role",
            "Update an Employee's Manager",
            "View All Employees by Manager",
            "View a Department's Total Budget",
            new inquirer.Separator(),
            "Exit",
            new inquirer.Separator(),
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
            case 'View All Employees by Manager':
            //   songAndAlbumSearch();
              break;
            case "View a Department's Total Budget":
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

// Fun ASCII art
function splashArt(){
    console.log(`
  ____________________  
((                    ))
 )) Employee Tracker ((
((                    ))  
  --------------------  
`)
}

// Bootup function
function init() {
    splashArt();
    mainMenu();
}

// Initiate
// =============================================================
init();

// Export
// =============================================================
module.exports = { mainMenu };