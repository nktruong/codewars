// given array containing strings 'good' and 'bad'
// return string

function well(x){
  // loop through array -> if string === good -> increase count by 1
  // if count is more than 2, return 'I smell a series!'
  // between 0-2, return 'Publish!'
  // else return 'Fail!'
  
  let count = 0
  
  for(let i=0; i<x.length; i++){
    if (x[i] === 'good'){
      count++
    }
  }
  
  if(count > 2){
    return 'I smell a series!'
  } else if (count > 0){
    return 'Publish!'
  } else {
    return 'Fail!'
  }
}

console.log(well(['good']), 'Publish!')
console.log(well(['good', 'bad']), 'Publish!')
console.log(well(['good', 'good', 'bad', 'good']), 'I smell a series!')
console.log(well(['bad']), 'Fail!')
