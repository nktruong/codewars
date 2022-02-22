// Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b/javascript

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String

// given name as string
// return name with first letter capitalized and rest lowercase

function hello(name) {
  // concatenate "Hello, "
  // if name is given -> substr to make 1st letter uppercase -> concatenate with rest of name to lowercase -> add "!"
  // if no name is given -> return "Hello, World!"
  
  return name ? "Hello, " + name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() + "!" : "Hello, World!";
}

console.log(hello("leOn"), "Hello, Leon!")
console.log(hello(""), "Hello, World!")
console.log(hello(), "Hello, World!")
