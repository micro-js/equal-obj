/**
 * Expose equal
 */

module.exports = equal['default'] = equal

/**
 * Check if two objects are equal.
 * @param  {Object} a object 1
 * @param  {Object} b object 2
 * @return {Boolean}
 */

function equal (a, b) {
  var aKeys = Object.keys(a)
  var bKeys = Object.keys(b)
  var aLen = aKeys.length
  var bLen = bKeys.length

  if (aLen === bLen) {
    for (var i = 0; i < aLen; ++i) {
      var key = aKeys[i]

      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key) || a[key] !== b[key]) {
        return false
      }
    }

    return true
  }

  return false
}
