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

    // Get
    getDept() {
        return this.connection.query(`
            SELECT id AS ID, name AS Department 
            FROM department`)
    }

    // Create

    // Update

    // Delete

}

// Export
// =============================================================
module.exports = new Database(connection);