 /*slice -> give an array and you want to contiguous segment of array then you can use slice

 arr = [10,20,30,40,50];
 index =0, 1, 2, 3, 4
 */

 let arr = [10,20,30,40,50];
 console.log(arr.slice(1,4)) // It's a copy of array and last index is exclusive of the element

 console.log(arr.slice(-3));
 console.log(arr.slice(-4,-2)) //slice lst index is -1 and it also allowed negative index

 console.log(arr.slice(-1,4)); // []
 console.log(arr.slice(-2,-4)) // []
 console.log(arr.slice(3)); // default index start with 0