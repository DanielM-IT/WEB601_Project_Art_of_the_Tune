const express = require('express');
const app = express()
const router = express.Router()
//const port = 4200
const config = require('./config')
const data = require('./data')

/* we going to require mysql driver */
const mysql = require('mysql')

/* Now we need to create a var to store our connection */
const connection = mysql.createConnection(config.database)
/* We are going to require routes */
const routes = require('./routes')
/*  we will change the code block blow for router get */
// router.get('/employee', (req, res) => {
//     res.send(data);
// });

router.get('/employees', routes.employeesList.listAllEmployees);

app.use('/api', router);

/* So we have the config file ready to required and make a database connection which give us two options
for connecting our API to db, we can use a native mysql nodejs driver or 
or a library called knex */

/* This in the start before the config file created */
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });

/*  
First we need to setup the connection to db and then fire the restful api instance
And this a good practices because you do not want the server up and running without the db not connected. 
So we are going to wrap the app.listen statement with a connection statement 
 */

connection.connect(error => {
    // error = 1; to test connection
    if (error) {
        console.error('Error connections to the database: ', error)
        return process.exit()
    }

    /* Now we are going to look at how to execute a query using mysql package
        we are going to use an app method and it has an object called locals.
        we going to add a connection property to it and a connection var
        */
    app.locals.connection = connection;
    /* Than means in employee file all we need to do is to create a connection var
        and request the app.locals.connection. */


    app.listen(config.APIServerPort, () => {
        console.log(`Server started on port ${config.APIServerPort}`);
    });
})