require("dotenv").config();
const express = require("express");
const { testDatabaseConnection } = require("./config/db");
const { makeSchema } = require("./models/UserModel");
const router = require("./routes/index");
const cookieParser = require("cookie-parser");
const cors = require('cors')

const app = express();
const port = process.env.PORT;

testDatabaseConnection();
makeSchema();

// app.use(cors({credentials: true, origin:'http://localhost:3000'}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
