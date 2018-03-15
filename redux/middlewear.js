//required because redux is synchronous and needed if you want it to be asynchronous.

//store.js with thunk
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/todo'

export default createStore(
  reducer,
  applyMiddleware(thunk)
)
