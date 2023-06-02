// importing necessary files to initialize app and port
const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');

// initializing app for use
const app = express();

//create port number
const PORT = 3388;

// middleware 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Read index.html
// GET /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

// Read notes.html
// GET /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

// GET /api/notes
app.get('/api/notes', (req, res) => {
    res.json(noteData);
});

// POST api/notes
app.post('/api/notes', (req, res) => {
    console.log(req.body)
});

// listening for requests
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);