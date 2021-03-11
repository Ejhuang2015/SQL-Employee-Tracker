// Dependencies
// =============================================================
// Access the Employee Tracker DB
const connection = require("../../config/connection");

// Class functions
// =============================================================
class Database {
    // Initialize
    constructor() {
        this.connection = connection;
    }

    // Getw
    getDept() {
        this.connection.query(`
            SELECT id AS ID, name AS Department 
            FROM department`,
            (err, res) => {
                if (err) throw err;
                return res;
            })
    }

    // Create

    // Update

    // Delete

}

// Export
// =============================================================
module.exports = new Database(connection);