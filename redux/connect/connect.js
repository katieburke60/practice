//App.js
import {connect} from 'react-redux'

const mapStateToProps = function(state) {
  state
}}
//takes the entire state and returns object that is the subset of the state we want to pass into our component.
const mapDispatchToProps = function(dispatch) {
  bindActionCreators({updateCurrent}, dispatch)
}
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch)
//Accepts the dispatch method from the store and returns an object that contains dispatch functions the same way bindActionCreators does.
//THE SAME AS
const mapDispatchToProps = ({updateCurrent}) //because connect handles the other stuff.

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
  //Connect takes argument called mapStateToProps
  //Pass in App and get back a connected component. Connect returns a new function that takes App as an argument.
  //Gives app access to the state that the component should have access to, which is defined in mapStateToProps.
//ALTERNATIVE
const ConnectedApp = function connect(state) {
  state, {updateCurrent}
}(App)
//SAME AS BELOW
connect(state) => (
  state,
  {updateCurrent}
)(App)

//IMPT: Must be using a provider for this to work.
