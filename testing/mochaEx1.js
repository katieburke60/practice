const chai = require('chai')
const assert = chai.assert

const Box = require('../Box.js')

describe('Box', function(){
  beforeEach(function() {
    let box = new Box()
  })
  it('should return true', function(){
    assert.equal(true, true)
  })
  it('should have a default height and width', function() {
    assert.equal(box.height, 100)
    assert.equal(box.width, 100)
  })
  it('should take a height and width as arguments.', function() {
    box.height = 200
    box.width = 500

    assert.equal(box.height, 200)
    assert.equal(box.width, 500)
  })
  it('should have an area method'), function() {
    box.height = 10
    box.width = 5

    assert.equal(box.area(), 50)
  }
})
