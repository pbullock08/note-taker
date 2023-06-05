//import router
const notesRouter = require('express').Router();

//import helper method and functions
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// GET /api/notes
notesRouter.get('/', (req, res) => {
    console.info(`${req.method} request received for notes.`);
    //get current notes
    fs.readFile('./db/db.json', 'utf-8', function (err, data) {
        res.json(JSON.parse(data))
    })
});

// POST api/notes
notesRouter.post('/', (req, res) => {
    //read current list
    fs.readFile('./db/db.json', 'uff-8', function (err, data) {
        // create new note based on user save
        let noteData = JSON.parse(data);
        const { title, text } = req.body;
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        // push new note into note data array
        noteData.push(newNote);

        // save that new note into the file to be read moving forward 
        fs.writeFile('./db/db.json', JSON.stringify(noteData, null, 4), function (err) {
            if (err) throw err;
            res.json(noteData);
        })
    })
});

// DELETE api/notes/specific id
notesRouter.delete('/:id', (req, res) => {
    // for (let i = 0; i < data.length; i++) {
    //     if (id === req.params.id) {
    //         return res.json(data[i]);
    //     }
    // }

    // checking to see if req.params.id matches :id
    const noteID = req.params.id;
});

// export router
module.exports = notesRouter;