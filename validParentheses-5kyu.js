// Valid Parentheses
// https://www.codewars.com/kata/52774a314c2333f0a7000688

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// --- Even BETTER solution ---
function validParentheses(parens){
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

// parameters: parens +
// r
// example
// () - true
// (()) - true

// check out how many ( are there
// if it's the same amount as ) then it's valid
// it has to have equal number of ( and ) to be valid
