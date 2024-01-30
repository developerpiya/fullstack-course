/**
 * callback
 * problems with callback
 * inversion of control
 */

//synchrouous piece of code
console.log('Hey code');

console.log('starting code');

for(let i =0; i<100000000; i++){
// console.log('inner loop');
}

console.log('End Code');

//asynchronous piece of code
console.log('Hey code');

console.log('starting code');

setTimeout(() =>{
    console.log('set timeout here not block thread')
},1000);

console.log('End Code');