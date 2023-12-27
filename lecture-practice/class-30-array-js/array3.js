// If we have an array emptyor having some values we can add more values in it

let arr = [3,4,2,5,6];
console.log(arr);
arr.push(10); // It add 10 at the last of array
console.log(arr);

arr.unshift(-1); // It add -1 to the start of array
console.log(arr);

arr.pop(); // It remove the value at the last of array
console.log(arr);

arr.shift(); // It remove the value to start the array
console.log(arr);

arr.push(10,20,40);
console.log(arr);