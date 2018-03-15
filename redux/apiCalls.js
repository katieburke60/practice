//store in lib/xyzServices.js

const getTodos = fetch('localhost8080/todos').then(function(response) {
  return response.json()
})

//Problem: When you make an API call then you need to have access to the dispatch method within the call so that you can wait for it to return data and then use that data as the payload for a dispatch.
  //Therefore we need to pass the dispatch method into the function (the way that mapDispatchToProps does as well.)

export const getUsers = () => {
  //return a function instead of an object
  return function (dispatch) {
    dispatch({type: 'LOADING_DATA'})
    .get("http://...").then(response => dispatch({type: 'FETCH_PROFILES', payload: data}))
  }
}
//Thunk gives you access to the dispatch method in actionCreators.
  //Allows you to return a function versus an object from the action creator.
  //Gives that function access to the dispatch method.s
createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
