// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/javascript

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  let array = num.toString().split('').map(int => {
    let i = parseInt(int)
    return i * i
  })
  return parseInt(array.join(''));
}

// go through each digit
// square
// concatenate digits

// Example:
// 3212 -> 3^2 = 9, 2^2 = 4, 1^2 = 1, 2^2 = 4
// so 3212 -> 9414
