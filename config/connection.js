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
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME
});

// Connect to the MySQL server and SQL database
connection.connect((err) => {if (err) throw err;});

connection.query = util.promisify(connection.query).bind(connection);

// Export
// =============================================================
module.exports = connection;