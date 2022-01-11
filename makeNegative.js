// given a number
// return a negative number

function makeNegative(num) {
  // if negative or 0, return #
  // if positive, return it as negative
  
  if (num > 0){
    return -num
  }
  
  return num
}

console.log(makeNegative(0))
console.log(makeNegative(4))
console.log(makeNegative(-4))
