import mysql from 'mysql';
var db;

//development
const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "npserver"
}

//production
// const config = {
//     host: "localhost",
//     user: "naukarip_naukarip",
//     password: "x0JPy7Sf*u(52W",
//     database: "naukarip_npserver"
// }

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(config);

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!', err);
            }
        });
    }
    return db;
}

module.exports = connectDatabase();