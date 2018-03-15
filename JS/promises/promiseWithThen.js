

let myFirstPromise = new Promise(function(resolve){
  // We call resolve(...) when what we were doing asynchronously was successful
  // In this example, we use setTimeout(...) to simulate async code.
  setTimeout(function(){
    console.log('waiting...')
    resolve("Success!"); // Yay! Everything went well!
  }, 3000);
});

myFirstPromise.then(function(returnValueOfPromise){
  // returnValueOfPromise is whatever we passed in the resolve(...) function above.
  console.log("Yay! " + returnValueOfPromise);
});

function getData(){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("Success!")
    }, 2000)
    })
}
getData().then(function(returnValue){
  console.log(returnValue)
})
