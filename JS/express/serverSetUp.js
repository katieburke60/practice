//QUESTION: Not sure what this means: We use resp.write to send information back in the HTTP response and resp.end() to terminate the response and send it back to the client.

//Routing: The act of delagating a request based on the URL to a particular function to handle that request and send a response. 

const http = require('http')
const port = 3000

const requestHandler = function(request, response){
  console.log(request.url)
  response.end('Hello node js server!')
}
