//Takes in a state and an action
//Returns the new state based on the changes from the action as a NEW object (does not transform old state.)
//Job of reducer is to return a new state based on an action.

//It's possible to use the same ACTION TYPE across multiple reducers by importing it from one to another when you need to do things simultaneously.

const initState = {
  todos: [
    {id: 1, name: 'Create static UI', isComplete: true},
    {id: 2, name: 'Create initial state', isComplete: true},
    {id: 3, name: 'render based on state', isComplete: false},
  ],
  currentTodo: 'temp'
}
//Best practice to make these constants and you can change the input value.
const CURRENT_UPDATE = 'CURRENT_UPDATE'
const TODO_ADD = 'TODO_ADD'

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: state.todos.concat(action.payload)}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
