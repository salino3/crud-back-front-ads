const mysql = require('mysql');
const config = require('../config');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    port: config.mysql.port,
    password: config.mysql.password,
    database: config.mysql.database
};

let conexion = mysql.createConnection(dbConfig);

function dbMysql() {

    conexion.connect((err) => {
        if(err){
            console.log("DB Error: ", err),
            setTimeout(dbMysql, 200)
        }else {
            console.log("DB Connected!!");
        };
    });
};


conexion.on("error", (err) => {
  console.log("[db err]", err);
  if (
    err.code === "PROTOCOL_CONNECTION_LOST" ||
    "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"
  ) {
    dbMysql();
  } else {
    throw err;
  }
});

dbMysql();


function Alls(table) {
 return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${table}`, (error, result) => {
        if(error) {
            return reject(error);
        }
            resolve(result)
        })
 })
};

function One(table, id) {

};

function addOne(table, data) {

};

function deleteOne(table, id) {

};


module.exports = {
    Alls,
    One,
    addOne,
    deleteOne
}