// importing necessary files to initialize app and port
const express = require('express');
const path = require('path');
const routes = require('./routes');

// initializing app for use
const app = express();

//create port number
const PORT = process.env.PORT || 8444;

// middleware 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// include routes
app.use(routes);

//Read index.html
// GET /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// Wildcard route to direct users to homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Read notes.html
// GET /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// listening for requests
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);