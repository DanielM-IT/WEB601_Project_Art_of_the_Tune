const express = require('express');
const app = express()
const router = express.Router()
let cors = require('cors')

const config = require('./config')

const middlewares = require('./middleware')
const bodyParser = require('body-parser')


/*Now we can make our payload as json format so it can be understood*/
const jsonParser = bodyParser.json() 

// knex connection to mysql db 
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

// add kenex to locals
app.locals.knex = knex

// Using routes
const routes = require('./routes')

// For each request, a function from  bookKnex handles the request
router.get('/songs', routes.songList.listAllSongs);

router.get('/songs/:SongId', middlewares.checkID, routes.songList.listSingleSong);

router.post('/songs', jsonParser, routes.songList.postSong);

router.patch('/songs/:SongId', jsonParser, middleware.checkID, routes.songList.updateSong)

router.delete('/songs/:SongId', middleware.checkID, routes.songList.deleteSong)


// Add api to the url
app.use('/api', cors(), router);




app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});