// Valid number to 2 decimal places
// https://www.codewars.com/kata/55f9064161541a9e01000001

// Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string.
// If the number satisfies the criteria below, the function should return true, else it should return false.

// Please check the criteria for a valid number:
// - optional + or - symbol in front
// - optional digits before a decimal point
// - a decimal point
// - exactly two digits after the point
// - nothing else

// Examples of valid and non-valid numbers
// - List of valid numbers: [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]
// - List of non-valid numbers: ["hellow 11.99" "11.9" "11" "11." ".9"]

/****************
 *  JavaScript  *
 *  ________    *
 * (      (()   *
 *  \   _S_\    *
 *   \ C\_/ \   *
 *    \______\  *
 *   (______()) *
 ****************/

/***********************
 *   This solution is  *
 *      powered by     *
 *     JS_REGEX(TM)    *
 *                     *
 * /^JS[_\s]R(E)G\1X$/ *
 *            sS       *
 *     ( ^^)-c[]       *
 ***********************/

function validNumber(n){return/^[+-]?(\d+)?\.\d{2}$/.test(n+[]);}
