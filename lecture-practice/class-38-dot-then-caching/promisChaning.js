//here we use catch by removing reject handler

function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(time);
        }, time)
    })
}


createPromise(1000) // returns pr1 {value:undefined, state:pending, onfullfilled:[f], onrejected:[]}
    .then(function f(value) {
        console.log('value in first then', value);
        return value * 2;
    }) 
    .catch(function r1(err){
        console.log('Dont worry r1 is here',err);
        throw 'piya';
    })
    .then(function g(value) {
        console.log('value in second then', value);
        return value * 2;
    }) 
    .catch(function r2(err){
        console.log('Dont worry r2 is here',err);
        return 99;
    })
    .then(function h(value) {
        console.log('value in third then', value);
        return value * 2;
    }) 
    .catch((error) => {
        //exception handler
        console.log('some exception case in between', error)
    })

/**
 * The above code and below code is ientical
 * const pr1 = createPromise(10000);
 * const pr2 = pr1.then(function f(value){
    console.log('value in first then',value);
    return value*2;
})

const pr3=pr2.then(function g(value){
    console.log('value in second then',value);
    return value*2;
})

const pr4 = pr3.then(function h(value){
    console.log('value in third then',value);
    return value*2;
})
 */

/**
 * console ={
 * log(,undefined) it returns undefined console.log is always a function
 * }
 */

//H.W. - how execution of console.log() ECMA have no description but node js have