const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// testing the server client functionality
// not used in program
app.get('/api', (req, res) => {
  res.json({message: "Hello from the other side!"});
})

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Start of program
// Connection to mySQL
var connnection = mysql.createConnection({
  host: "localhost",
  user: "uche",
  password: "./uchepassword",
});

connnection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// get method to initialze mySQL
app.get('/init', (req, res) => {

  connnection.query(`CREATE DATABASE postdb`,
    function (error, result) {
      if (error) { console.log("creating db error"); console.log(error); }
      console.log("created postdb")
    }
  );
  connnection.query(`USE postdb`,
    function (error, result) {
      if (error) { console.log("using db error"); console.log(error);; }
      console.log("using postdb")
    }
  );
  connnection.query(`CREATE TABLE posts(id int unsigned NOT NULL auto_increment, 
        topic varchar(50) NOT NULL, data varchar(100) NOT NULL, datetime varchar(30) NOT NULL,
        PRIMARY KEY(id))`,
    function (error, result) {
      if (error) { console.log("Create table error"); console.log(error);; }
      console.log("created posts")
    }
  );
});

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////








app.get('/table', (req, res) => {

  connnection.query(`SELECT data FROM posts WHERE topic = 'Hi' `,
    function (error, result) {
      if (error) { console.log("getting from table error"); console.log(error); }
      res.json(result);
    }
  );
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
