const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.HOST, //where we are hosting mysql
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD, //goes into our .env file, looks for a key that starts with host 
    database: process.env.DATABASE_NAME
  }); 


db.connect((err) => { //connects to mysql
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('Connected to MySQL server as id', db.threadId);
  });

module.exports = db;


