const isEvenOdd = function(num){
    return num%2==0;
}
const result = isEvenOdd(67);
console.log(result);

/**
 * why named function expression is important
 * (1) Debugging
 * (2) Recursion
 * (3) Readability
 */

//you can pass function as an argument
const isEvenOrOdd = function(x,fn){
    console.trace('trace of the function');
    fn();
    return x%2==0;
}
isEvenOrOdd(10,function(){
    console.log('processing .......');
    console.trace('trace of the functions');
})

//linters is a tool which identify your code is clean or not