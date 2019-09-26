// First we going to use Express package
const express = require('express')
// We also need to instantiate Express by calling it as a function.
const app = express()
// We are going to create a var for call router object in express and router will be our instances 
const router = express.Router()
// We are going to use our dummy data to make any http call.
const data = require('./data')
// We need specify the HTTP method and then we need to decide what should happen when we access the route 
// using the get method.
app.get('/api/userAccounts', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/userAccounts', (req, res) => {
    res.send('HTTP POST setup done!');
});
// Instead of specifying GET and POST methods we can app.all method with the function handler. 
// This will give us all the HTTP methods with given route.
app.all('/api/userAccounts', (req, res, next) => {
    res.send(`${req.method} setup done!`);
});

// Here we are going to call the route method and that will allow us to specify the route separately. 
// And then we can use any HTTP methods with route. 
app.route('/api/userAccounts')
    .get((req, res) => {
        res.send('GET');
    })
    .post((req, res) => {
        res.send('POST');
    })
// All the above are the basic ways to create endpoints for HTTP handlers in express.

// This will be different from the rest of app methods call because it's mountable and this will be more fixable. 
router.get('/userAccounts', (req, res) => res.send(data))
// Here we mounted /api to router 
app.use('/api', router)
// The method above will help with versioning APIs 

// We are going to use Express to work with static data, sometimes we want to serve some static assets. 
// We are going to use images in the img folder
// We are going to use the express static middleware function,Which we just need to specify the folder of images
// We can also add any identifier which can specify in the first part 
app.use('/images', express.static('images'))

// We are creating a RSTful API we going to using query parameters or query strings. 
// and these will be separated by ? and  there would be key value pairs for filtering, sorting and paging. 
router.get('/userAccounts', (req, res) => {
    // With the curly brackets  it means return is not explicit. 
    console.log(req.query) // we can access all the query parameters by call the req object and the query property on it. 
    // so we can type in the url ?page=2&sort=name
    return res.send(data)
});

// We can access the parameters passed by the url and with those are denoted by colum by the call and then a term. 
// let's think about :id as a var and capturing that and accessing that value. 
router.get('/userAccounts/:id', (req, res) => {
    const id = +req.params.id // Here we are gathering the one employee info. 
    //req.params.id is actually of data type string and int and we can con convert it by using Unary + operator. 
    const employee = data.filter(d => d.id === id) // here we are using array function.
    console.log(req.params) // And params is an object here with parameters. and we access any property from the object. 
    return res.send(employee) // send a single employee back. 
});

// We are specifying an port number  which Express is going to be running 
const port = 8080
// Here we are specifying a callback function to start listing to port 8080
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});