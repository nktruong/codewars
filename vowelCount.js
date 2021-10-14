// Vowel Count

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// --- BETTER SOLUTION ---

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

// --- Original, weird solution ---

function getCount(str) {
  let vowelsCount = 0
  
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
  str.split('').forEach(letter => {console.log(letter)
                                                if (vowels.includes(letter)){
                                                  vowelsCount++
                                                  console.log(vowelsCount)
                                                }})
  return vowelsCount
}

// param - count of vowel. given string
// example - hey. vowelscount = 3
// pseudo - vowel count init
// valid vowels array
// make str into array
// iterate through to see if it's included
// IF included, add to count
