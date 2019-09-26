// So our database is ready and now let's  talk about what we want our api to do?
/*
1- GET a list all employees
2- GET a list of information about one single employee
3- POST create an employee
4- PATCH update an employee
5- Delete remove an employee

6- GET list all departments 
7- GET a list information  bout one single department
8-POST create a department
9-PATCH update a department 
10- DELETE a department
 */

// So many endpoints we need to create so we need to think how we are going to organize our code ?
//In the previous examples  we had a single entry file like app.js that we specified a route with a handler function. 
// Now to ensure a better code quality we are going to use node system module. 
//And with that we can specify separate route files and that will allow us to specify a controllers for employees and departments. 
/* ------------------------------------------------------------------------------------------------------------------- */

// inside routes we are going to call employee by using require. This employees controller
const employeesList = require('./employeeKnex.js')
// Then we can departments controller 
// Homework
// Then we are going to export employeesList
module.exports = {
    employeesList
}