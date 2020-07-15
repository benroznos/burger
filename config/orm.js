const db = require('./connection')


const orm = {

  selectAll(table, cb) {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },

  insertOne(table, data, cb) {
    db.query(`INSERT INTO ${table} SET ?`, data, (err, response) => {
      if (err) { console.log(err) }
      cb(response)
    })
  },

  updateOne(table, changes, where, cb) {
    db.query(`UPDATE ${table} SET ? WHERE ?`, [changes, where], (err, response) => {
      if (err) { console.log(err) }
      cb(response)
    })
  }

}

module.exports = orm