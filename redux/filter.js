//Create a selector function in the reducer
export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'active':
      return todos.filter(t => !t.isComplete)
    case 'complete':
      return todos.filter(t => t.isComplete)
    default:
      return todos
  }
}
//Todolist.js
  //import into the component and use to filter out the todos that are returned as props for component to render.
  export default connect(
    (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
    {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos}
  )(TodoList)

  
