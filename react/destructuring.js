import React from 'react'

const TodoItem = (props) => {
  return (
    <li key={props.id}>
      <input type="checkbox" defaultChecked={props.isComplete}/>
      {props.name}
    </li>
  )
}

//ALTERNATIVE DESTRUCTURED
const TodoItem = ({id, name, isComplete}) => {
  return (
    <li key={id}>
      <input type="checkbox" defaultChecked={isComplete}/>
      {name}
    </li>
  )
}

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

export default TodoList
