require("dotenv").config();
const express = require("express");
const { testDatabaseConnection } = require("./config/db");
const { makeSchema } = require("./models/UserModel");
const app = express();
const port = process.env.PORT;
const router = require("./routes/index");

testDatabaseConnection();
makeSchema();

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
