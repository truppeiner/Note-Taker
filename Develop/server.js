const express = require('express');
const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
let db = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware 


app.listen(PORT, () => {
    console.log("server is now live on port 3001!");
})