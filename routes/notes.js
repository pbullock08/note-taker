//import router
const notesRouter = require('express').Router();

//import necessary modules and packages
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
    fs.readFile('./db/db.json', 'utf-8', function (err, data) {
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

        // re-write notes array to include new note 
        fs.writeFile('./db/db.json', JSON.stringify(noteData, null, 4), function (err) {
            if (err) throw err;
            res.json(noteData);
        })
    })
});

// DELETE api/notes/specific id
notesRouter.delete('/:id', (req, res) => {
    // checking to see if req.params.id matches :id
    const noteID = req.params.id;

    // get current notes 
    fs.readFile('./db/db.json', 'utf-8', function (err, data) {
        let noteData = JSON.parse(data);
        // filter items in the notes array to find the ones that don't match the current id
        const filteredData = noteData.filter((note) => note.id !== noteID);
    
        // re-write notes array to include all filtered notes (permanently deletes selected note)
        fs.writeFile('./db/db.json', JSON.stringify(filteredData, null, 4), function (err) {
            if (err) throw err;
            res.json(filteredData);
        })
    })
});

// export router
module.exports = notesRouter;