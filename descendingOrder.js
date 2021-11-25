// non-negative integer

function descendingOrder(n){
  // if # is single digit -> return num
  // else turn into string -> array -> sort (a-b) -> reverse
  
  if(n.toString().length === 1){
    return n
  } else {
    return parseInt(n.toString().split('').sort((a,b) => a-b).reverse().join(''))
  }
  
  // return digits in descending order
}

console.log(descendingOrder(45), 54)
console.log(descendingOrder(0), 0)
console.log(descendingOrder(232), 322)
