import mysql from 'mysql';
var db;

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "npserver"
}

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(config);

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();