// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome (str) {
  return [...str].reverse().join('') === str
}

module.exports = palindrome

// look for a palindrome with reverse() helper
/**
 * function palindrome (str) {
  return [...str].reverse().join('') === str
}
 * */

// look for a palindrome with reduce() helper
/**
 * function palindrome (str) {
  return [...str].reduce((rev, char) => char + rev === str, '')
}
 * */

// look for a palindrome with every() helper NOT BETTER
/*
* function palindrome (str) {
 return [...str].every((char, i) => char === str[ str.length - i - 1 ])
 }
* */

// look for a palindrome with for of ...

/**
 * function palindrome (str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed === str
}
 * */
