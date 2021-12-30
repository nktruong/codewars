// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// given: integer (non-negative). Will it ever be 0? -> yes
// return: integer (how many # of bits are  equal to 1)

var countBits = function(n) {
  // initiate counter variable at 0
  let count = 0
  
  // convert number to binary (.toString(2)) -> split num to array -> if num = '1' ? add to count -> go till the end of num
  n.toString(2).split('').forEach(digit => digit === '1' ? count++: null)
  
  return count
};

console.log(countBits(0), 0)
console.log(countBits(4), 1) // 2*2 = 4. so, 4 is 100 in binary
console.log(countBits(6), 2)  // 2*2 = 4. 2x1 = 2. so, 6 is 110 in binary
