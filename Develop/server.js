const express = require('express');
const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
let db = require('./db/db.json');

const { query } = require('express');
const { parse } = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// first get route get all notes
app.get('/api/notes', (req, res) => {
    res.json(db);
    console.log(db);
})

// get route to return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// get route to return index.html 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// post route to create notes 
app.post('/api/notes', (req, res) => {

})

app.listen(PORT, () => {
    console.log("server is now live on port 3001!");
})