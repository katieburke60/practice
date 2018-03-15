 function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

BoardMember.prototype.veto = function(){
  return 'No, I must disagree'
}
Dog.prototype.bark = function() {
  console.log('woof')
}
let fido = new Dog('Fido')
fido.bark() // Here we are asking fido to call bark on itself.
//when you attach something to the prototype you're saying that every instance of that thing has access to the method or attribute.
