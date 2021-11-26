// Who likes it?
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

/**
 *  MY SOLUTION
 */

// get array (may be empty, otherwise has strings)
// qs: will it ever not be a string? empty values? mult arrays? certain format of capitalization? Only first names? what format for each # of strings?
// in the same order of the names in the array? any white space that needs trimming?

function likes(names) {
  // spread op -> count length of array -> have different if statements
  
  // if empty -> return string "no one likes this"
  // or if 1 string -> return string "arr[0] likes this"
  // or if 2 strings -> return string "arr[0] and arr[1] like this"
  // or if 3 strings -> return string "arr[0], arr[1] and arr[2] like this"
  // or if 4 (or more) strings -> return string "arr[0], arr[1] and arr.length - 2 like this"
  
  if(names.length === 0){
    return "no one likes this"
  } else if (names.length === 1){
    return `${names[0]} likes this`
  } else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  
  // return string
}

console.log(likes([]), "no one likes this")                              // empty array
console.log(likes(['Jeon']), "Jeon likes this")                          // array of 1 string
console.log(likes(['Bob', 'Leon']), "Bob and Leon like this")            // array of 2 strings
console.log(likes(['Epo', 'Red', 'Veg']), "Epo, Red and Veg like this")  // array of 3 strings
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), "Alex, Jacob and 2 others like this") // 4

// for 4 or more names: "and 2 others" increases. ex(5): "and 3 others"
