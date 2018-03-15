//Notes
  //There is no way to directly interact with the store. We can either retrieve data by obtaining its current state, or change its state by dispatching an action (we only have access to the top and bottom component of the redux flow diagram shown previously).

//Backend

<Provider store={createStore()}>
  <App />
</Provider>
//Makes store avaiable to the rest of the application through the connect function

function createStore(reducer) {
  let state
  let listeners = []

  function dispatch(action) {
    return state = reducer(state, action)
    listeners.forEach(listener => listener())
  }
  function getState() {
    return state
  }
  function subscribe(listener) {
    listeners.push(listener)
  }
  return ({dispatch: dispatch, getState = getState, subscribe: subscribe})
}
function render() {
  document.getElementById('root').innerHTML = store.getState()
}

store = createStore(myReducer)

//Store.js
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import todoReducer from './reducers/todo'
import messageReducer from './reducers/messages'

const reducer = combineReducers({
  todo: todoReducer,
  messages: messageReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )

//index.js
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
