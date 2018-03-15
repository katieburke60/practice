const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('icebreakers_development.sqlite3') //creates an instance of a database connection.

module.exports = db;
