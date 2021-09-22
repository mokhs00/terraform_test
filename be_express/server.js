const dotenv = require("dotenv")

dotenv.config();

const express = require("express");

const app = express();
const port = 8000 || process.env.PORT;

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


app.get("/", (req, res) => {
  res.send("hello World");
});  

app.listen(port, () => {
  console.log(`Example app listening at port : ${port}`);
  connection.connect();
  
  connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows[0].solution);
  });  
  
  connection.end();
});  

