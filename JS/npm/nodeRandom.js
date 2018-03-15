//user.js

class User{
  constructor(name, email){
    this.name = name;
    this.email = email
  }
  greeting(){
    console.log(`Hello, I'm ${this.name}`)
  }
}

module.exports = User

//CLI.JS
const User = require("./User.js")
const prompt = require('prompt')

prompt.start()
prompt.get(//etc.)

const userName = "Avi"
const userEmail = "avi@flatironschool.com"

const avi = new User(userName, userEmail)
avi.greeting() // Hello, I'm Avi
