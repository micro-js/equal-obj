/**
 * Imports
 */

var equal = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(equal({a: 1}, {a: 1}))
  t.ok(!equal({a: 1}, {b: 1}))
  t.ok(!equal({a: 1}, {}))
  t.ok(!equal({a: 1}, {a: 2}))
  t.ok(!equal({a: 1}, {a: 1, b: 2}))
  t.end()
})
