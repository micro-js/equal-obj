/**
 * objectEqual
 */

function objectEqual (a, b) {
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

/**
 * Exports
 */

module.exports = objectEqual
