$.ajax({
  type: 'GET',
  url: "http://localhost:3000/api/v1/posts"
})
.then(appendPosts)
.catch(errorLog)

const appendPosts = function(posts){
  posts.forEach(function(post){
    $('.posts-box').append(post)
  })
}
const errorLog = function(error){
  console.log(error)
}

const postArticle = function(event){
  event.preventDefault
  return $.post("http://localhost:3000/api/v1/posts")
  .then(appendPosts)
  .catch(errorLog)
}

$('.form').on('submit', postArticle)
