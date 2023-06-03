const express = require("express");
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken')

app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    // Authenticate User

    
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})