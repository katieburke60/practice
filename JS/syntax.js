const Message = ({message}) => (

  message ? <span className='message'>{message}</span> : null
)
//SAME AS
const Message = (props) => (
  props.message? <span className='message'>{props.message}</span> : null
)
//2. CURRY function
handleSearchSubmit = (query) => event => {
  event.preventDefault()
  this.props.gifSearch(query)
}

//3. ACCIDENTALLY RUN ON CLICK WHEN PAGE RENDERS
<form onSubmit={props.handleSubmit(props.query)} />

//4. Array.prototype.sort
let sortedHogs = this.state.hogs.sort((a, b) => {
      return a.weight - b.weight
    })


//5.  You need pass to onClick reference to function, when you do like this activatePlaylist( .. ) you call function and pass to onClick value that returned from activatePlaylist. You can use one of these three options:

// 1. using .bind
  activatePlaylist.bind(this, playlist.playlist_id)
// 2. using arrow function
  onClick={ () => this.activatePlaylist(playlist.playlist_id) }
// 3. or return function from activatePlaylist
  activatePlaylist(playlistId) {
    return function () {
       // you code
    }
  }

//SHORTHAND OBJECT NOTATION
{todos: todos} //SAME AS =>
  {todos}
