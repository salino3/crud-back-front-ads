const dotenv = require('dotenv');

dotenv.config();


module.exports = {
  app: {
    port: process.env.PORT || 4000,
   }, 
  mysql: {
    host: process.env.HOST || 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB
  }
}; 

console.log(process.env.HOST);
