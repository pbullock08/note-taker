// importing necessary files to initialize app and port
const express = require('express');
const path = require('path');

// initializing app for use
const app = express();

//create port number
const PORT = 8888;

// using middleware for the public folder 
app.use = (express.static('public'));

// listening for requests
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);