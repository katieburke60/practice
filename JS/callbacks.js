//Call stack: keeps track of where we are in the program
  //when you step into a function it goes onto the top of call stack
  //when executed it pops off the top.

//Errors will print the 'stack trace'. The stuff immediately below the error is where in the stack was last.

//Blocking: Code that is slow. (image processing, network requests, loops)

//In browser we have access to
  //Web APIs: DOM, AJAX, setTimeout

//Asnyc
//1.Function gets pushed onto top of stack
//2. function pops off stack to a web API (e.g., AJAX) -- that does stuff (gets data, sets timer, etc.)
//3. Once the web API has completed the request it sends the function to the task queue
//4. Event loop maintains awareness of (a) call stack and (b) task queue.
  //When the call stack is empty it takes the first thing in the task queue and pushes it onto the call stack.
//5.Callback then appears on the stack and is run
