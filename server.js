const mysql = require("mysql");
const express = require("express");
const body_parser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3011;


app.use(body_parser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.listen(PORT, ()=> console.log("App listening on localhost, port: " + PORT)); 