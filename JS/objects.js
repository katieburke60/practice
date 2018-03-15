const school = {
  name: 'Flatiron',
  street1: '11 Broadway',
  city: 'New York',
  zipCode: '10004'
}
let keyIWant = "zipCode"

school.keyIWant //return value is undefined
school[keyIWant] //return value = 10004 (cues key zipCode)
  //same as school["zipCode"]

//Break object down into its keys (the cost key name doesn't matter)
const school = {
  name: 'Flatiron',
  street1: '11 Broadway',
  city: 'New York',
  zipCode: '10004',
  students: ['Ryan', 'Andrew', 'Craig']
}
for(const key in school) {
  if(Array.isArray(school[key])) {
    school[key].map(element => console.log(element) )
  }
  else {
    console.log(school[key]) //log values of the keys
    console.log(key) //log keys
  }
}
