// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse (str) {
  return [...str].reverse().join('')
}

module.exports = reverse

// Solution with reverse() helper
/**
 * function reverse (str) {
 return [...str].reverse().join('')
 }
 */

// Solution with reduce() helper
/**
 * function reverse (str) {
  return [...str].reduce((rev, char) => char + rev, '')
}
 */

// solution with for of ...
/**
 * function reverse (str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed
}
 * */
