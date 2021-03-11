// Dependencies
// =============================================================
var mysql = require("mysql");
var util = require("util");

// MySQL connection to database
// =============================================================
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_trackerdb",
});

// Connect to the MySQL server and SQL database
connection.connect((err) => {if (err) throw err;});

connection.query = util.promisify(connection.query).bind(connection);

// Export
// =============================================================
module.exports = connection;