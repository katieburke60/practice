//UPDATE TODO EXAMPLE

//1. todoservices.js
  // Create a new service function that makes the update on the server with PUT method.
  export const updateTodo = (todo) => {
  return fetch(`http://localhost:8080/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: todo.name,
      isComplete: todo.isComplete
    }),
  }).then(function(response) {
    return response.json()
  })
}
//2a. Todos Reducer (actions)
  //Create an function that:
    //First finds the component that we are attempting to update by its unique id.
      //getState(id)
    //Then make the change desired to that component e.g., {...todo, isComplete: !todo.isComplete}
    //Then push the change to the server with the service function from the other file
      //Be sure to import that function into the reducer
    //Once the promise is resolved (.then) take the response and use it to dispatch an action that updates the state.
    export const toggleTodo = (id) => {
      return(dispatch, getState) => {
        dispatch(showMessage('Saving todo update'))
        const {todos} = getState().todo
        const todo = todos.find(t => t.id === id)
        const toggled = {...todo, isComplete: !todo.isComplete}
        updateTodo(toggled)
          .then(res => dispatch(replaceTodo(res)))
      }
    }
//2b. Todos Reducer Function
  //Create a new action type to accomplish goal (REPLACE_TODO)
  //Then create another case in the reducer to take that action type and the payload (returned from the server) to update the state
    //In the example find the todo with the appropriate ID and then update it with the action.payload
    case TODO_REPLACE:
      return {...state, todos: state.todos.map(t => t.id === action.payload.id ? action.payload : t)}
//3. Todolist component
  //Connect the toggleTodo (reducer method) to the component using the connect / mapDispatch to props feature
    export default connect(
      (state) => ({todos: state.todo.todos}),
      {fetchTodos, toggleTodo}
    )(TodoList)
  //Pass the method to the component of interest (if necessary)
    <ul>
      {this.props.todos.map(todo =>
        <TodoItem key={todo.id} toggleTodo={this.props.toggleTodo} {...todo} />)}
    </ul>
  //Add an event handler to trigger the desired method when appropriate (and pass in needed information such as the ID)
    const TodoItem = ({id, name, isComplete, toggleTodo}) => {
      return (
        <li>
          <input
            type="checkbox"
            checked={isComplete}
            onChange={() => toggleTodo(id)}/>
          {name}
        </li>
      )
    }
