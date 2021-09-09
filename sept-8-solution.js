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
  while (sum != 0){
    
    if (sum >= 128){
      binary += "1"
      sum -= 128
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 128`)
    if (sum >= 64){
      binary += "1"
      sum -= 64
    } else if (binary == "1"){
      binary += "0"
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 64`)
    if (sum >= 32){
      binary += "1"
      sum -= 32
    } else {
      binary += "0"
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 32`)
    if (sum >= 16){
      binary += "1"
      sum -= 16
    } else {
      binary += "0"
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 16`)
    if (sum >= 8){
      binary += "1"
      sum -= 8
    } else {
      binary += "0"
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 8`)
    if (sum >= 4){
      binary += "1"
      sum -= 4
    } else {
      binary += "0"
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 4`)
    if (sum >= 2){
      binary += "1"
      sum -= 2
    } else {
      binary += "0"
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 2`)
    if (sum >= 1){
      binary += "1"
      sum -= 1
    } else {
      binary += "0"
    }
    // console.log(`Sum: ${sum} Binary: ${binary} at 1`)
  }
    binary = binary.substring(binary.indexOf("1"));
  
  console.log(binary)
  return binary
}
