// Base Case
function getTweets (uid) {
  return fetch('https://api.users.com/' + uid)
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      return response.data
    }).then(function (tweets) {
      return tweets.filter(function (tweet) {
        return tweet.stars > 50
      })
    }).then(function (tweets) {
      return tweets.filter(function (tweet) {
        return tweet.rts > 50
      })
    })
}
//With Arrow functions (no benefits)
function getTweets (uid) {
  return fetch('https://api.users.com/' + uid)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      return response.data
    }).then((tweets) => {
      return tweets.filter((tweet) => {
        return tweet.stars > 50
      })
    }).then((tweets) => {
      return tweets.filter((tweet) => {
        return tweet.rts > 50
      })
    })
}

//1. BENEFIT #1: Implicit returns: If function is one line then you can have an explicit return value.
  //In this case do not need brackets {}
    function getTweets (uid) {
    return fetch('https://api.users.com/' + uid)
      .then((response) => response.json())
      .then((response) => response.data)
      .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
      .then((tweets) => tweets.filter((tweet) => tweet.rts > 50))
  }

//2. BENEFIT #2: If one has one parameter you can omit the () around it
function getTweets (uid) {
  return fetch('https://api.users.com/' + uid)
    .then(response => response.json())
    .then(response => response.data)
    .then(tweets => tweets.filter(tweet => tweet.stars > 50))
    .then(tweets => tweets.filter(tweet => tweet.rts > 50))
}
