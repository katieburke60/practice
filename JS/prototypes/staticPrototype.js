//Static functions are those that are attached directly to the class versus the instance objects. 

function User(name, email){
  this.name = name
  this.email = email
}

User.BatchCreate = function(userArray) {
  data.map(function(dataPoint){
    return new User(dataPoint[0], dataPoint[1])
  })
}

const data = [
  ["Avi", "avi@flatironschool.com"],
  ["Grace", "grace@hopper.com"],
  ["Alan", "alan@xparc.com"]
]

let users = data.map(function(dataPoint){
  return new User(dataPoint[0], dataPoint[1])
})
