const express = require("express");
const app = express();

// get, post, put, patch, delete, all, listen, use
// response methods: json, send, redirect, render

app.get('/status', (req, res) => {
    res.send('The server is alive!');
})


const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));