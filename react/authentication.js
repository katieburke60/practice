export function getUsers() {
  return function(dispatch) {
    fetch('http://localhost:3000/users', headers: {
      authorization: jwt_token
    })
  }
}
