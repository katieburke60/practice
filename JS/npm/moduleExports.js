const sayHello = function(){
  console.log("Hello, World!")
}

module.exports = sayHello //allows this file to load sayHello into the main module of any other file that requires it.

console.log(module.filename);
console.log(module.id);
console.log(module.exports);


node module.js //Run module.js from the command line
