let arr = [1, 2, 3, 4, 5,];

for (let i = 0; i < arr.length; i++) {
    console.log('Element at index ', i, 'is', arr[i]);
}

console.log(arr);
/**
 * forEach -> goes to every element of the array, and executes the given callback on that element
 */

arr.forEach((element, index) => {
    // one by one every element is passed as argument to this callback
    // does'nt return anything
    console.log("Element is", element, 'index is', index);
})

/**
 * Que - Implement your own dummy forEach
 * function forEach(arr,cb){
 * // It applies the cb to every element of array
 * }
 */

console.log('-----------------');
function customForEach(arr, callback) {
    for(let i = 0;i<arr.length;i++){
        //now we have access to every index and element of the array
        callback(arr[i],i);
    }
}

customForEach([1, 2, 3], (element,index) => {
    console.log('Element at index',index, 'is',element);
})