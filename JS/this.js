//1. IMPLICIT BINDING
//The first question to ask is: Where is this function invoked?
  //Then look to see if there's anything to the left of the function.
  //See if the thing to the left of the function (separated by a dot) has a property that's attached to this (e.g., this.name)

//2. EXPLICIT BINDING
//Call
  //function.call(thisReference)
  //sayName.call(stacey, argument1, arg2)
    //this will be set equal to the first argument passed into call.
    //everything after that is passed in as a typical argument.

//Apply: same thing as call, but allows you to pass in an array of arguments as the arguments (after the this thing.)

//Bind:

//Other notes
  //Context: Refers to the object within which a function is executing. When you use 'this' it refers to that object. 
