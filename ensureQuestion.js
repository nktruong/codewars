// Ensure question
// https://www.codewars.com/kata/5866fc43395d9138a7000006/elixir
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

function ensureQuestion(s) {
  // Code here
  if (s[s.length - 1] !== '?'){
    return s + '?'
  } else {
    return s
  }
}
