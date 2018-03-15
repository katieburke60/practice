//Workflow
  //1. Decide inputs
  //2. Decide outputs
  //3. Figure out logic to get from 1 to 2

//When functions are invoked they will always return a value. By default, the value is undefined.
//Returning something from a function takes the value from inside and throws it outside to make it more broadly available.
//IMPT: As soon as JS encounters a return function it will exit the functino body and not execute the rest of the code.

//Identifies: Names of functions or variables.

//Browser does 2 things when JS loads
//1. Compilation (only looks at declarations)
  // When it reaches a variable declaration, the engine allocates memory and sets up a reference to the variable's identifier, e.g., myVar.
  // When the engine encounters a function declaration, it does three things:
  // Allocates memory and sets up a reference to the function's identifier, e.g., myFunc.
  //   Creates a new execution context with a new scope.
  //   Adds a reference to the parent scope (the outer environment) to the scope chain, making variables and functions declared in the outer environment available in the new function's scope.
//2. Execution
  //Actually runs code and assigns values to variables and invoking functions. Matches identifies to corresponding values in memory.
    //Starts by checking to see if variable is defined in the current scope and then continues checking up the scope chain.
    //IF it goes all the way up through global scope and cannot find a declaration it will throw a 'reference error'
    //IMPT: It does not matter where a function is invoked, but only where it is declared for purposes of the variables that it can access.

  //More Definitions
    //Lexical environment: Synonym for scope.
