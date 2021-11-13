// Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/javascript

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
 // good luck
  let score = 0
  for (i=0; i < array1.length; i++){
    if (array1[i] === array2[i]){
      score += 4
      console.log(score + "correct")
    } else if (array1[i] !== array2[i] && array2[i]!== ""){
      score -= 1
      console.log(score + "incorrect")
    } 
  }
  
  if (score<0){
    score = 0
  }
  return score
}
