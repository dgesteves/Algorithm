// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels (str) {

  return str.replace(/[^aeiou]/gi, '').length
}

module.exports = vowels

// Solution with filter() helper
/**
 * function vowels (str) {

 return [...str].filter(
 char => char.toLowerCase() === 'a' || char.toLowerCase() === 'e' ||
 char.toLowerCase() === 'i' || char.toLowerCase() === 'o' ||
 char.toLowerCase() === 'u').length
 }
 * */
