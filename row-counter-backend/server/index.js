const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// removing the mongoose db connection for now
// const db = require("./db");
const MongoClient = require("mongodb").MongoClient;
const apiPort = 5000; // formerly 3000 (3000 currently in use with JSON Server)
require("dotenv").config();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "fiber-art";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
    const projectsCollection = db.collection("projects");

    // set view engine for React (create-react-app)
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(bodyParser.json());

    // db.on("error", console.error.bind(console, "MongoDB connection error:"));

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
  }
);
