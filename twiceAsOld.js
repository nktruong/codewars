// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0

// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  
  let doubleAge = sonYearsOld * 2
  let years = 0
  
  dadYearsOld >= doubleAge ? years = dadYearsOld - doubleAge : years = doubleAge - dadYearsOld
  
  return years
}
