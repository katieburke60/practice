//ALLOWS YOU TO CHANGE THE URL WITHOUT PAGE RELOAD!

yarn add react-router-dom

//footer.js
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <Link to='/'>All</Link>
    <Link to='/active'>Active</Link>
    <Link to='/completed'>Completed</Link>
  </div>
)

//App.js
  //import Router from 'react-router-dom'
  //import the footer
  //Wrap the main application component in Router

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Todo List App</h2>
        </div>
        <Message />
        <Router>
          <div className="Todo-App">
            <TodoForm />
            <TodoList />
            <Footer />
          </div>
        </Router>
      </div>

    );
  }
}
