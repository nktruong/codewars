// Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// receiving string of only lowercase letters

function count (string) {  
  // store count in object
  let countObj = {}
  //loop -> check to see in obj -> +1 -> if not create letter + add value of 1
  for(const c of string){
    if(countObj[c]){
      countObj[c]++
    }else{
      countObj[c] = 1
    }
  }
  //return object with key:letter val
  return countObj
}

console.log(count('aba'), {'a':2,'b':1})
console.log(count('abccceeeba'), {'a':2,'b':2,'c':3,'e':3})
console.log(count(''), {})
