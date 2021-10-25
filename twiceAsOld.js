function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  
  let doubleAge = sonYearsOld * 2
  let years = 0
  
  dadYearsOld >= doubleAge ? years = dadYearsOld - doubleAge : years = doubleAge - dadYearsOld
  
  return years
}
