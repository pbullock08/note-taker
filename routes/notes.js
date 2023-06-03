//import router
const notesRouter = require('express').Router();

//import helper method and functions
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET /api/notes
notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for notes.`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST api/notes
notesRouter.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text,
            id: uuid(),
        };

        console.log(req.body);


        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully!')
    } else {
        res.error('Error in adding note.')
    }
});

notesRouter.delete('/:id', (req, res) => {
    for (let i = 0; i < data.length; i++) {
        if (id === req.params.id) {
            return res.json(data[i]);
        }
    }
});

// export router
module.exports = notesRouter;