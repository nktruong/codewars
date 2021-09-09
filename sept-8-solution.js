// ### Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// Examples: add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
// add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  let sum = a+b
  let binary = ""
  // return sum in binary
  
  // if # is smaller than a power of 2, then go
  // if it can go into a #, then subtract the sum
  
  let exp = 7
  
  while (sum > 0 || exp > -1){
    
    if (sum >= Math.pow(2, exp)){
      binary += "1"
      sum -= Math.pow(2, exp)
    } else {
      binary += "0"
    }
    console.log(`Sum: ${sum} Binary: ${binary} at ${Math.pow(2, exp)}`)
    exp--
    if (sum > 0 && exp === -1){
      exp = 7
    }
  }
  binary = binary.substring(binary.indexOf("1"));
  return binary
}
