// Dependencies
// =============================================================
var mysql = require("mysql");

// MySQL connection to database
// =============================================================
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the MySQL server and SQL database
connection.connect((err) => {if (err) throw err;});

// Export
// =============================================================
module.exports = connection;