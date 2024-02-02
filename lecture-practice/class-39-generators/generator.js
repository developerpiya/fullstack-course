function* gen(){
    console.log("Line 1");
    yield 1;
    console.log("Line 2");
    yield 2;
    console.log("Line 3");
    yield 3;
    console.log("Line 4");
    yield 4;
    console.log("Line 5");
    yield 5; 
    console.log("Line 6");
    yield 6;
}
//generators are similar to normal functions with a few changes
//to declare a generator use function* instead of function keyword
let x=gen();
console.log(x.next());
console.log("Is Paused");
console.log(x.next());
console.log("Is Paused");
console.log(x.next());
console.log("Is Paused");
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());