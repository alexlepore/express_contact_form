const mysql = require("mysql");
const express = require("express");
const body_parser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3011;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_db"
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


app.post("/", (req, res) => connection.query(
    "insert into basic_form_info (user_name, email_address, user_message) values (?, ?, ?)", [req.body.full_name, req.body.email_address, req.body.user_message],
    function(err, result){
        if(err){
            throw err
        }
        res.redirect("/");
    }
));

app.listen(PORT, () => console.log("App listening on localhost, port: " + PORT)); 