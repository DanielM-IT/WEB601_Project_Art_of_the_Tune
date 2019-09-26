// We are going to create a config file for our database connection
// We are going to call that object database. 
// We are going to specify a host port 
// And since an config file we can create an API server port var and export as well

const APIServerPort = 4200

const database = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'allmine',
    database: 'artofthetune',
    insecureAuth: true
}

module.exports = {
    database,
    APIServerPort
}