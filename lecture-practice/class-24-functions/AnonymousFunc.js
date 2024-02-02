// (1) Anonymous Function

const greet = function () {
    console.log('Good Morning');
}

greet();

const greet2 = () => {
    console.log("Good Evening");
}

greet2();

//(2) Named function expression

const nameFunc = function namedFunction() {
    console.log('Hello I am named function');
}
nameFunc();

//(3) First class function - return use
function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function calculator(num1, num2, operation) {
    return operation(num1, num2)
}
console.log('Addition operation', calculator(2, 3, add));
console.log('substraction operation', calculator(5, 1, sub))

    //(4) IIFE - IImediately invoked function expression

//     (
//         function () {
//             console.log("Hello I am IIFE function");
//         }
//     )();

// (
//     () => {
//         console.log("Hello I am arrow IIFE function");
//     }
// )

//(5) Pure function - when we give same argument and get same output then it called pure function
function addVal(num1, num2) {
    return num1 + num2;
}
const addition1 = addVal(2, 3);
const addition2 = addVal(2, 3);
const addition3 = addVal(2, 7);
const addition4 = addVal(2, 7);

console.log(addition1, addition2, addition3, addition4);

//(5) Impure function - when we give same argument and get same output then it called Impure function
let totalVal = 100;
const incrementVal = (increment) => {
    return (totalVal += increment);
}
const val1 = incrementVal(50);
const val2 = incrementVal(50);
console.log(val1, val2);

//(6) Callback function - use as a argument to the another argument
const displayResult = (result) => {
    console.log("your result is", result);
}
const addition = (num1, num2, callback) => {
    const result = num1 + num2;
    callback(result);
}
const substraction = (num1, num2, callback) => {
    const result = num1 + num2;
    callback(result);
}
addition(10, 20, displayResult);
substraction(20, 30, displayResult);

//(7) HOF - Higher order function
//returning function from another function
function createGreeting(greet) {
    return function (name) {
        console.log(greet + " " + name);
    }
}
const morning = createGreeting("Good Morning");
morning("Inner function");

const night = createGreeting("Good Night");
night("Another inner function");

//(8) Lambda function - one line anonymous arrow function that takes one and more parameters
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(30, 40));

//(9) function currying

//simplearrow function
function calculateVolume(length,breadth,height){
    return length*breadth*height;
}
const volume = calculateVolume(3,4,5);
console.log(volume);

//function using cuurying method
function calculateNewVolume(length){
    return function(breadth){
        return function(height){
            return length*breadth*height;
        }
    }
}
const newVolume = calculateNewVolume(5)(6)(7);
console.log(newVolume);