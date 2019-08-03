// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanStr (str) {
  return [...str.replace(/[^\w]/g, '').toLowerCase()].sort().join('')
}

function anagrams (stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB)
}

module.exports = anagrams

// Replace all characters that are not letters from the string
/**
 * /[^\w]/g
 * */

// 1st way of solving it
/**
 * function mapStrToObject (str) {
  let charMap = {}

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[ char ] = charMap[ char ] + 1 || 1
  }
  return charMap
}

 function anagrams (stringA, stringB) {
  const mapA = mapStrToObject(stringA)
  const mapB = mapStrToObject(stringB)

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false
  }

  for (let char in mapA) {
    if (mapA[ char ] !== mapB[ char ]) {
      return false
    }
  }
  return true
}
 * */
