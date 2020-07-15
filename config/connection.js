const mysql = require('mysql2')
let db

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'blahblah',
    database: 'burgers_db'
  })
}

module.exports = db