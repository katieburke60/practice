import React, { Component } from 'react';
import './App.css';

import TodoList from './TodoList.js'

class App extends Component {
  render() {
    return (
      <div className="Todolist App">
        <form>
          <input type="text"/>
        </form>
        <div className="TodoList">
          <ul>
            <li>
              <input type="checkbox" /> Todo
            </li>
            <li>
              <input type="checkbox" /> Todo
            </li>
            <li>
              <input type="checkbox" /> Todo
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
