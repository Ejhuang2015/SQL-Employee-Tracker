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
            SELECT emp.id AS ID, emp.first_name AS "First Name", emp.last_name AS "Last Name", role.title AS "Job Title", role.salary AS Salary, dept.name AS Department, CONCAT (mana.first_name, " ", mana.last_name) AS Manager
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
            SELECT emp.id AS ID, emp.first_name AS "First Name", emp.last_name AS "Last Name", role.title AS "Job Title", role.salary AS Salary, dept.name AS Department, CONCAT (mana.first_name, " ", mana.last_name) AS Manager
            FROM employee AS emp
            LEFT JOIN role ON emp.role_id = role.id
            LEFT JOIN department AS dept ON role.department_id = dept.id
            LEFT JOIN employee AS mana on mana.id = emp.manager_id
            WHERE emp.manager_id = ?
            ORDER BY dept.name ASC, role.salary DESC, emp.last_name ASC, emp.first_name ASC`, [id])
    }
    getDeptBudget(id) {
        return this.connection.query(`
            SELECT dept.name AS Department, SUM(role.salary) AS "Total Budget"
            FROM (employee AS emp
            INNER JOIN role ON emp.role_id = role.id
            INNER JOIN department AS dept ON role.department_id = dept.id)
            WHERE dept.id = ?`, [id])
    }

    // Create
    addDept(newDept) {
        return this.connection.query(`
        INSERT INTO department 
        SET ?`, {name: newDept.name});
    }

    addRole(newRole) {
        return this.connection.query(`
        INSERT INTO role
        SET ?`, {title: newRole.title, salary: newRole.salary, department_id: newRole.department});
    }

    addEmp(newEmp) {
        if (!newEmp.manager){
            return this.connection.query(`
            INSERT INTO employee
            SET ?`, {first_name: newEmp.first, last_name: newEmp.last, role_id: newEmp.role});
        } else {
            return this.connection.query(`
            INSERT INTO employee
            SET ?`, {first_name: newEmp.first, last_name: newEmp.last, role_id: newEmp.role, manager_id: newEmp.manager});
        }
    }

    // Update

    // Delete

}

// Export
// =============================================================
module.exports = new Database(connection);