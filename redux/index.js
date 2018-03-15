//PROVIDER
  //Takes care of rendering and subscribing to the store and getting state changes.
  //Also gives you access to the state
const render = () => {
  const state = store.getState()
  ReactDOM.render(<App todos={state.todos}
    currentTodo={state.currentTodo}
    changeCurrent={actions.updateCurrent}
  />,
  document.getElementById('root'));
}
render()

store.subscribe(render)
