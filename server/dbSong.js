// Lists all the songs
function listAllSongs(req, res) {
    const {
        knex
    } = req.app.locals
    knex
        .select('SongId','Title', 'Author', 'Length', 'Genre')
        .from('Song')
       
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

// Lists single song by ID
function listSingleSong(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        SongId
    } = req.params
    knex
        // DB Query
        .select('SongId','Title', 'Author', 'Length', 'Genre')
        .from('Song')
        .where({
            SongId: `${SongId}`
        })
        
        // Response
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Song with ID ${SongId} does not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Add a song to the DB
function postSong(req, res) {
    const {
        knex
    } = req.app.locals
    const payload = req.body
    // Parsing payload
    const mandatoryColumns = ['Title', 'Author', 'Length', 'Genre']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if MC is filled then posts
    if (mandatoryColumnsExists) {
        knex('Song')
            .insert(payload)
            .then(response => res.status(201).json('Song record created'))
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

// Updating a song by id
function updateSong(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        SongId
    } = req.params
    const payload = req.body
    knex('Song')
        .where('SongId', SongId)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json()
            } else {
                return res.status(404).json(`Song with id ${SongId} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Deleting a song by id
function deleteSong(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        SongId
    } = req.params
    knex('Song')
        .where('SongId', SongId)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Song with id ${SongId} is removed.`)
            } else {
                res.status(404).json(`Song with id ${SongId} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllSongs,
    listSingleSong,
    postSong,
    updateSong,
    deleteSong
}