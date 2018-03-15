//When to use promises:
  // when you have code that is trying to talk to a database are to get data from the internet wait for the data to be returned before it continues to do other stuff.

//Promise is an object that promises that something will resolve and when it does it gives the return value.
  //An object that is waiting for a resolution and you use the resolve versus return keyword.
//Then is what you want to do when a promise is done resolving.
//The argument for the function in then is the return value of the promise.
//One concern is getting into 'callback hell'.

//Promise.all takes an array of promises and waits until all of the promises are resolved. This solves the nastiness involved in doing this with callbacks.

//Promise.race takes an array of promises and resolves as soon as any one of them fulfill. This would allow you to hit 3 API endpoints and then move on when we heard back from whichever one came back first.

//All arguments after .then() are option and non-functional values are ignored.
