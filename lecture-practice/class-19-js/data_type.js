/**
 * There are two type of data types 
 * (1) primitive Data type
 * (stack kind of memory)
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * Symbol
 * BigInt
 */
const firstname = 'piya';
const age = 20;
const score = 200.12;
let isLoggedIn = true;
const nodeVersion = null;
let bankBalance = undefined;
const buttonId = Symbol('id');
const aRealLongNumber = 989878787675645434n;

/**
 * (2) Reference (Non primitive) Data type
 * (heap kind of memory)
 * Array
 * Objects
 * Functions
 */

const numbers = [1,2,3,4,5];
const heros = ['piya','jiya','tiya'];
const userObject = {
    name:'piya',
    age:23,
    isLoggedIn:true
}

const sayHello = function(){
    console.log('Piya');
}
sayHello();