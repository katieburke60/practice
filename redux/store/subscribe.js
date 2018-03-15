//Subscribe calls the function within it whenever there are changes to the store
//A best practice is to put render (rerendering the app) in subscribe in index.js

//index.js
const render = () => {
  const state = store.getState()
  ReactDOM.render(<App todos={state.todos} currentTodo={state.currentTodo} changeCurrent={todoChangeHandler}/>, document.getElementById('root'));
}
render()

store.subscribe(render)
