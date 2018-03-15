
//FOR SYNCHRONOUS code: Then and catch
var greeting;
try {
    greeting = sayHello();
    greeting = addExclamation(greeting);
    console.log(greeting);    // 'hello world!!!!’
} catch(error) {
    console.error('uh oh: ', error);   // 'uh oh: something bad happened’
}

$.get("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
  .then(data => //do something if data is returned)
  .catch(error => //do something if an error is returned)

//ASYNCHRONOUS:
  //When dealing with asynchronous operations, synchronous try/catch can no longer be used.
var greetingPromise = sayHello();
  greetingPromise
    .then(addExclamation)
    .then(function (greeting) {
        console.log(greeting);    // 'hello world!!!!’
    }, function(error) {
        console.error('uh oh: ', error);   // 'uh oh: something bad happened’
    });
