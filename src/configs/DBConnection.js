require('dotenv').config();
import mysql from "mysql2";

let connection = mysql.createConnection({
    host: "database-1.c50uywoesq5f.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "mydatabase"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;
