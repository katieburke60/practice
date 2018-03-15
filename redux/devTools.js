//These do not automatically work with Redux. Need to do some setup.

yarn add redux-dev-tools-extension

//store.js
import {composeWithDevTools} from 'redux-dev-tools-extension'

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
//@@INIT: The initial action passed through the reducer
//Stopwatch icon: You can move back and forth through state changes over time.
//Can also dispatch actions directly from the devtools.
