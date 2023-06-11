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
  };
});

dbMysql();


function Alls(table) {
 return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${table}`, (error, result) => {
        return error ? reject(error) : resolve(result);
    });
 });
};

function One(table, id) {
 return new Promise((resolve, reject) => {
   conexion.query(`SELECT * FROM ${table} WHERE id = ${id}`, (error, result) => {
       return error ? reject(error) : resolve(result);
   });
 });
};

function insert(table, data) {
 return new Promise((resolve, reject) => {
   conexion.query(
     `INSERT INTO ${table} SET ?`, data,
     (error, result) => {
       return error ? reject(error) : resolve(result);
     }
   );
 }); 
}; 

function update(table, data) {
 return new Promise((resolve, reject) => {
   conexion.query(
     `UPDATE ${table} SET ? WHERE id = ?`, [data, data.id],
     (error, result) => {
       return error ? reject(error) : resolve(result);
     }
   );
 }); 
}; 

function addOne(table, data) {
 if(data && data.id == 0 || !data.id){
    return insert(table, data) ;
 }else {
    return update(table, data);
 }
};

function deleteOne(table, data) {
 return new Promise((resolve, reject) => {
   conexion.query(
     `DELETE FROM ${table} WHERE id = ?`, data.id,
     (error, result) => {
       return error ? reject(error) : resolve(result);
     }
   );
 }); 
}; 

 
module.exports = {
    Alls,
    One,
    addOne,
    deleteOne
} 