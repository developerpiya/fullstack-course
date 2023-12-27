/**
 * splice -> method -> remove elements and memory space from array
 * It delete actual array
 */

let arr = [9,8,7,6,5,4,3,2,1];
const result = arr.splice(1,3); // from index 1 remove 3 elements to the right
console.log('Returned value',result); 
console.log(arr);

const result1 = arr.splice(1); // It delete all elements starting from index 1
console.log(arr);

// Note = If we want to open any method definition then press ctrl and hover an element after then press enter

let array = [12,23,34,45,56,67];
const res = array.splice(3,4,-1,-2,-3,5,6,); // delete the array index 3 towards right deleteCount 4 values and replace values on index places -1 and -2
console.log(res);
console.log(array);