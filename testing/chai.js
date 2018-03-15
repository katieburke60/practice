//chai is an assertion library for mocha.
//Assertions check that when certain pieces of code are executed that we are getting back what we expect.

//Assert
assert.method(actual, expected, [message])

let assert = chai.assert
//assert equality
assert.equal(2+2, 4, 'adding two plus two returns 4')

//assert inequality
assert.notEqual(3, 4, 'these numbers are not equal')

//assert existence
var foo = 'hi'
assert.exists(foo, 'foo is neither null nor undefined.')

//assert type of something
assert.typeOf(foo, 'string')
assert.typeOf(['tea', 'coffee'], 'array', 'we have an array')

//assert inclusion
assert.include([1,2,3], 2, 'array includes value of 2.')

assert.lengthOf(foo, 3)
assert.property(tea, 'flavors')

//Should
chai.should()
foo.should.be.a('string')
foo.should.equal('bar')
foo.should.have.lengthOf(3)

//Expect
let expect = chai.expect
expect(foo).to.be.a('string')
expect(foo).to.have.lengthOf(3)
expect(tea).to.have.property('flavors').with.lengthOf(3)
