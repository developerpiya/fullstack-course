//It will be a long road before we are understanding how promise solve IOC.

/**
 * It is a simple js object. It's part of native JS language. It's a feature of js not  the run time
 * promises are considered redability inhencer as well
 * just like use promise and cb with sync and asynchronous code
 * promises are also considered placeholder of future task
 * (1) how to create a promise
 * (2) how to use a promise
 */

/**
 * How to consume a promise ?
 * properties of promise object
 * (1) status - every promise object can have one of the three status pending, fullfill,rejected
 *  (2) value - 
 *  (3) on fullfillment
 *  (4) on Rejection
 */

/**
 * possible status : pending, rejected, fullfill
 * the moment we creatd the promise immediately the status is pending
 * pending-fullfilled,Rejected
 * from pending can you go to fullfilled or rejected status
 * once the promise is fullfilled or rejected the you can'nt change the status
 * when will the status change & to what it will change is programmed when promise is created . consumer of promise do not decide when and how state chenge
 * A promise can be in forever pending status also .
 */

/**
 * value of a promise - initially when promise is created the state is pending & the value property is undefined.
 * when the state of the promise will changed to fullfilled or rejected , then the value property it may or may not be change.
 * like if u have a petrol car will start or not 
 */