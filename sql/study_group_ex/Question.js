const db = require('./config/db.js') //request db constant from the config/db.js file

class Question {
  static CreateTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )
    `;
    db.run(sql);
  }

  static All() {
    return new Promise((resolve) => db.all("SELECT * FROM questions", function(err, results) {
      resolve(results)
      //return value of promise is whatever you pass into resolve.
    }))
  }
  static async PrintAll() { //await and async must be paired together
    const questions = await this.All() //until the promise has resolved do not do the next line of code
    questions.forEach(question => console.log(`${question.id}. ${question.content}`))
  }
}
Question.PrintAll()
