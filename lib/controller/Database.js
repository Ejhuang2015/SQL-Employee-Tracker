// Dependencies
// =============================================================
// Access the Employee Tracker DB
const connection = require("../../config/connection");

// const test = `
// SELECT E.first_name as First, E.last_name as Last, D.Department, R.Role, R.Salary, E.isManager 
// FROM employee as E 
// LEFT JOIN role as R ON E.id_role = R.id 
// LEFT JOIN department as D ON R.id_department = D.id`;

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
            FROM department
            ORDER BY name ASC`)
    }
    getRole() {
        return this.connection.query(`
            SELECT role.id AS ID, role.title AS Position, role.salary AS Salary, dept.name AS Department      
            FROM role
            LEFT JOIN department AS dept ON role.department_id = dept.id
            ORDER BY dept.name ASC, role.salary DESC`)
    }
    getEmp() {
        return this.connection.query(`
            SELECT emp.id AS ID, emp.first_name AS First_Name, emp.last_name AS Last_Name, role.title AS Job_Title, role.salary AS Salary, dept.name AS Department, CONCAT (mana.first_name, " ", mana.last_name) AS Manager
            FROM employee AS emp
            LEFT JOIN role ON emp.role_id = role.id
            LEFT JOIN department AS dept ON role.department_id = dept.id
            LEFT JOIN employee AS mana on mana.id = emp.manager_id
            ORDER BY dept.name ASC, role.salary DESC, emp.last_name ASC, emp.first_name ASC`)
    }
    getMana() {
        return this.connection.query(`
            SELECT emp.id, CONCAT(emp.first_name, " ", emp.last_name) AS Managers
            FROM employee AS emp
            WHERE emp.manager_id IS NULL`)
    }
    getEmpByMana(id) {
        return this.connection.query(`
            SELECT emp.id AS ID, emp.first_name AS First_Name, emp.last_name AS Last_Name, role.title AS Job_Title, role.salary AS Salary, dept.name AS Department, CONCAT (mana.first_name, " ", mana.last_name) AS Manager
            FROM employee AS emp
            LEFT JOIN role ON emp.role_id = role.id
            LEFT JOIN department AS dept ON role.department_id = dept.id
            LEFT JOIN employee AS mana on mana.id = emp.manager_id
            WHERE emp.manager_id = ?
            ORDER BY dept.name ASC, role.salary DESC, emp.last_name ASC, emp.first_name ASC`, [id])
    }


    // Create

    // Update

    // Delete

}

// Export
// =============================================================
module.exports = new Database(connection);