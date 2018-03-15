// 1. Get mocha before each to work.
// 2. Why do you need super in the constructor before using this in JS?
// 3. React: How to reset the state of one component with another component (e.g., using clear button component to reset state of input component in NumberGuesser)
// 4. Proptypes is only working on page reload
// 5. JS: When do you have access to 'this' and when do you not? Functional versus class components.
// 6. Use of spread operator. See #6 notes below (don't really get what it's doing)
//7. How to add switch statement shortcut in atom? (and other shortcuts.)
//8. Redux: What's the benefit of using bindActionCreators?
//9. What is fetch?
//10. How does 'destructuring' stuff out of props work?
//11. Why are functions passed in from the reducer to take place at a DOM event done as callbacks?
//12. When to use {} versus () especially with arrow functions.
//13. Overarching: What is a thread?
//14. Understanding of pure versus impure functions (examples of them)
//15. Binding in React. Why do you have to do this.handleSubmit.bind(this). What is 'this' equal to at different points?


#6 //Spread Operator Usage
//For some reason must have spread operator. Not sure why?
const TodoList = (props) => {
  return (
    <div className="TodoList">
      <ul>

        {props.todos.map(todo => <TodoItem {...todo} />)}
      </ul>
    </div>
  )
}
#11.
const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => {
  return (
    <li>
      <span className='delete-item'>
        <button onClick={() => deleteTodo(id)}>X</button>
      </span>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => toggleTodo(id)}/>
      {name}
    </li>
  )
}
