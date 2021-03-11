// Dependencies
// =============================================================
const menu = require("./lib/functions/mainMenu");

// Functions
// =============================================================
// Fun ASCII art
function splashArt() {
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
    menu.mainMenu();
}

// Initiate
// =============================================================
init();