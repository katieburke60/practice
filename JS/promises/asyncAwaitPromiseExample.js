//EXAMPLE #1
let myFirstPromise = new Promise(function(resolve){
  setTimeout(function(){
    resolve("Success!");
  }, 1000);
});

async function main(){
  let returnValueOfPromise = await myFirstPromise;
  //return value of promise will always be equal to success because its going to wait until the promise has been resolved.
  //Then we can use this variable without waiting for anytihng else to occur
  //can only use await keyword in a function that is defined as async.
  console.log("Yay! " + returnValueOfPromise);
}

main()

//EXAMPLE #2

class Question {
  constructor(content) {
    this.content = content
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
