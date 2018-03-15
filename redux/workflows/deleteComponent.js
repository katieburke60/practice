//1. todoservices.js
  // Create a new service function to delete a component.

//2. Todo reducer
  //Create function to delete todo that:
    //Accepts the ID as an argument
    //Uses getState() to get all of the todos
    //Calls destroytodo service function on the id that's passed in
    //Dispatches an action creator to remove the todo from the list
    export const deleteTodo = (id) => {
      return(dispatch, getState) => {
        dispatch(showMessage('Deleting todo'))
        const {todos} = getState().todo
        destroyTodo(id)
          .then(dispatch(removeTodo(id)))
      }
    }

//2b. Todo reducer
  //Create an action creator to remove a todo that takes TODO_REMOVE and a payload of the todo id.
  //Add a reducer function to remove the todo that filters out the todo with the id that's passed in.
  case TODO_REMOVE:
    return {...state,
      todos: state.todos.filter(t => t.id !== action.payload)
    }
//3. TodoList component
  //Add the removeTodo method to the connect function and import into the file.
  //Add it as a prop to the relevant component
  //Add an onChange function that calls removeTodo and passes in the todo's id.
    //May need to add a button or something to make a place for it.
    //This will be done as a callback.
