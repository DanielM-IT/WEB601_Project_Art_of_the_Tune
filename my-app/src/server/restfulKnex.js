const express = require('express');
const app = express()
const router = express.Router()

const config = require('./config')
const data = require('./data')

const middlewares = require('./middlewares')
const bodyParser = require('body-parser')


/*Now we can make our payload as json format so it can be understood*/
const jsonParser = bodyParser.json() /*We only going to use the jasonParser as middleware */

/* 
We are going to require knex and then immediately going to pass in a configuration object,
first of all we need to specify the client and then connection
 */
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

/*
Then we will take app.locals again and add the knex object 
 */
app.locals.knex = knex

/*  We are going to require routes */
const routes = require('./routes')



// router.get('/employees', routes.employeesList.listAllEmployees); // This line is for mysql native package
router.get('/employees', routes.employeesList.listAllEmployeesKnex);
/* Here we are going to get a single employee by accessing id parameter */
router.get('/employees/:id', middlewares.checkID, routes.employeesList.listSingleEmployee);
/* Now we are going to POST to the employees list but we need to make sure to create a need record in db*/
router.post('/employees', jsonParser, routes.employeesList.postEmployee);
/* Now we are going to use PATCH to update employee data, so we need to create a handler function*/
router.patch('/employees/:id', jsonParser, middlewares.checkID, routes.employeesList.updateEmployee)
/* Now we are going to use DELETE to remove an employee from the table */
router.delete('/employees/:id', middlewares.checkID, routes.employeesList.deleteEmployee)

app.use('/api', router);


app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});