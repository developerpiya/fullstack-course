/* 
reverse -> this reverse an array 
*/

let arr = [2,3,4,5,6,7,8,1];
console.log(arr.reverse()); // It reverse the actual array

/**
 * join -> It combines elements of an array
 */

let result = arr.join(); // default separater between elements will be comma
console.log(result);

let result1 = arr.join(':');
console.log(result1);

/**
 * delete -> It's an operator
 */
let array = [32,34,45,66,22];
delete array[1]; // updates the value with undefined. It only remove the value not the index
console.log(array);
console.log(array[1]);