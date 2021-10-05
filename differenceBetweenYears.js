// Difference between years. (Level 1)
// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD.
// Your job is: Take the years and calculate the difference between them.

// Examples:
// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
// At this level, you don't need validate months and days to calculate the difference.

var howManyYears = function(date1, date2){
  // get year and initialize sum as a #
  let year1 = Number(date1.substring(0,4))
  let year2 = Number(date2.substring(0,4))
  let sum = 0
  
  // subtract the greater year from the other
  year1 > year2 ? sum = year1 - year2 : sum = year2 - year1

  return sum
}
