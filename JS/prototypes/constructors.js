function Dog(name, breed){
  this.name = name
  this.breed = breed
}

Dog.prototype.meow = function() {
  console.log(`meow ${this.name}!`)
}

//SAME AS CLASS FUNCTIONS
class Pig {
  constructor(name, breed){ //constructor is just a reserved instance function (that automatically gets called when you create a new instance of the function.)
    this.name = name
    this.breed = breed
  }
   bark(){ //automatically attaches onto the prototype versus the object itself.
    console.log('woof')
  }
}

//EXAMPLE #2
class Baby {
  constructor(){
    this.constructor.push(this)
  }
  static All() { //class function
    return this._All
  }
  cry() {
    //instance function
  }
}
Baby._All = []

// [].constructor = Array

class Avi{
  constructor(name) {
    this.firstname = name.split(" ")[0]
    this.lastname = name.split(" ")[1]
  }
  name(){
    return this.firstname
  }
  greeting(){
    console.log(`Hi, I'm ${this.name()}`)
  }
}

// String.prototype.isHello = function(){
//   if(this === 'hello'){
//      return true
//      console.log('true')
//   }
// }
