// Bumps in the Road
// https://www.codewars.com/kata/57ed30dde7728215300005fa/javascript

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// get: string with _ or n (is it ever empty, will there be anything that's not _ or n)
// return "Woohoo!" if there are less than 15 bumps. "Car Dead" if over 15

function bump(x){
  // split string into array
  // for loop
  // check in string for _
  // if so, add 1 to the counter
  
  let theRoad = x.split('')
  let bumps = 0
  
  for(let drive in theRoad){
    // if there's a bump in the road, add 1 to the counter
    if (theRoad[drive] == 'n'){
      bumps += 1
    }
    if (bumps > 15){
      return ("Car Dead")
    }
  }
  return ('Woohoo!')
}

console.log(bump("_n"), "Woohoo!")
console.log(bump("_n_nnnnnnnnnnnnnnnnnnnnnnnnnnnnn_n_n_n_n_______nnnnnnnnnnnnnn_____________"), "Car Dead")
