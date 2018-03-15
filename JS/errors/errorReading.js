//1. UNCAUGHT REFERENCEERROR: _____ IS NOT DEFINED
  //Check for scope issues (declaration versus invokation)

//2. UNCAUGHT TYPEERROR: _____ IS NOT A FUNCTION
  //Often happens when a variable contains undefined instead of a function.

//3. UNCAUGHT SYNTAXERROR: MISSING ) AFTER ARGUMENT LIST
  //Tried to invoke a function, but left out a paren

//STACK TRACE
const snackSelection = 'Pretzels';

if (snackSelection = 'Pretzels') {
  console.log("That'll be $1, please!");
}
ERROR: Uncaught TypeError: Assignment to constant variable.    VM5412:3
  //VM tells us that the error didn't occur in a specific file (but rather is on the virtual machine.)
          at <anonymous>:3:20
          // tells us there was an error in the file at line3, character20.
       (anonymous) @ VM5412:3
       //(anonymous) tells us we're in global scope
