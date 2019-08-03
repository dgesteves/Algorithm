// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize (fn) {

  const cache = {}

  return function (...args) {

    if (cache[ args ]) {

      return cache[ args ]
    }

    const result = fn.apply(this, args)

    cache[ args ] = result

    return result
  }
}

function fib (n) {

  if (n < 2) {
    return n
  }

  return fibMemoize(n - 1) + fibMemoize(n - 2)

}

const fibMemoize = memoize(fib)

module.exports = fib

// Using iteration
/**
 *function fib (n) {

 let result = [0, 1]

 if (n < 2) {
 return n
 }

 for (let i = 2; i <= n; i++) {
 result.push(( result[ i - 1 ] ) + ( result[ i - 2 ] ))
 }
 return result[n]
 }
 * */
