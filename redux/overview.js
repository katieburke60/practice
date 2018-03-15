//STATE
  //Entire state contained in one JS object.


//ACTIONS
  //The only way to change the state tree is by dispatching an action.
  //Components know to dispatch actions (what needs to happen), but they do not know HOW those actions are implemented.
  //Any data that needs to get into the state comes through an action.

//3. Have to have one reducer that takes previous state and action and returns a new state. This has to be a pure function.

//IMPT: ONLY one main wrapper component should subscribe to the store. The rest of the components will be children of the wrapper and will only get the parts of the state that they need.
  //Provider serves this role.
