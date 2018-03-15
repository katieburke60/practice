//Every fetch request we make will return a Promise object that contains our response data

fetch('/api/v1/projects', {
  method: 'POST',
  body: JSON.stringify({
    projectName: 'Foo',
    totalPoints: 100
  })
});
.then(response => response.json())

//Converting the body to response.json() will actually return another promise.
  //That means we can chain an additional then block on.
