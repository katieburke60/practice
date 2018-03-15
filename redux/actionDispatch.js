//ACTION always has a certain shape with a type property and payload
  //payload is any data that needs to be sent along with an object.

const action = {type: 'TODO_ADD', payload: {id: 1, name: 'Add todo', isComplete: false}}
}
//Action Creator
export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})

//BindActionCreator
const actions = bindActionCreators({
  functionWeWantToCall: ActionCreatorWeWantValPassedTo
}, store.dispatch)

const actions = bindActionCreators({
  todoChangeHandler: updateCurrent
}, store.dispatch)
//Same as below
const actions = bindActionCreators({updateCurrent}, store.dispatch)

//WHAT DISPATCH DOES
function dispatch(action){
    state = changeState(state, action)
}
