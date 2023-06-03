require('dotenv').config()
const express = require("express");
const {sequelize, testDatabaseConnection} = require('./config/db')
const app = express();
const port = process.env.PORT;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

testDatabaseConnection()

app.use(express.json())

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.post('/api/register', async (req, res) => {
    // Authenticate User
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})