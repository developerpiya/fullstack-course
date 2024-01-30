/**
 * Recursion - 
 */

/**
 * Memory architecture - (1) saved a file on hard disk (HD) or solid state drive (SSD) 
 * (2) run the file in RAM (code is a execution phase is called process.)
 */

/**
 * stack - FILO (First in last out), insertion is done from top
 * It also follow (LIFO) - Last in first out
 * insert operation use push
 * remove operatio use pop
 */

/**
 * Call Stack - In memory of a process, we have a data structure call stack whenever and whereever we call a function, that function is pushed into the call stack
 * when we return from a function or if function ends itself then we pop the function from call stack the function at the top of call stack is the current execution one.
 */

function f1() {
    console.log('Inside f1');
}

function f2() {
    console.log('Inside f2');
    f1();
    return 7 + 8;
}

function f3() {
    console.log('Inside f3')
    f2(); // just call f2
    return 5;
}

function f4() {
    console.log('Inside f4')
    const x = 10;
    const y = f3(); // store the value of f3 in y
    return x + y;
}

console.log('start');
const result = f4();
console.log(result);

//Recursion is not a computer science concept. It is a descrete maths concept . 

// In recursion function call itself.

/**
 * function f4(){
 * f3() - function call anather function
 * }
 */

/**
 * factorial - n! = n*(n-1)*(n-2)------
 */