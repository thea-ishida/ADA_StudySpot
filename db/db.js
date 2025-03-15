const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.HOST, // hosting sql
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD, // goes to .env file
    database: process.env.DATABASE_NAME
  });


db.connect((err) => { // connecting to mysql
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('Connected to MySQL server as id', db.threadId);
});

module.exports = db;

