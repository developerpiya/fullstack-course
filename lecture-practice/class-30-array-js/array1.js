let x = []; //initialize empty array
console.log(x);

let arr = [10, 'sanket', null, undefined, false, 33.333, 62]; //initialized array with default values
console.log(arr);

let array = Array(15); //lenth of array is 15
console.log(array);
console.log(array.length);

let arrayWithAll0 = Array(20).fill(0);//All value fill with 0;
console.log(arrayWithAll0);

let arrayfillaccIndex = Array(20).fill(2,3,7) // value fill with 2 starts from index 2 and ends from index 6 it means include 3 and exclude 7
console.log(arrayfillaccIndex);