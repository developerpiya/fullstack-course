const firstName = 'Hello';
const lastName = 'HC';
console.log(firstName+' '+lastName);
console.log(`my firstname is ${firstName} and lastname is ${lastName}`);

const username = new String('piya');
console.log(username);
console.log(username[0], username[3], username.length);
console.log(username.charAt(0));
console.log(username.substring(0,2));

let email = '  piya@gmail.  com';
console.log(email);
console.log(email.trim()); // It remove the starting spaces
let emailTwo = 'hc@pw.live';
console.log(emailTwo);
console.log(emailTwo.replace('hc','hitesh'));
console.log(email.includes('pi'));
console.log(email.toUpperCase().trim());
console.log(email.toLowerCase());

const num = new Number(5);
console.log(typeof num.toString(), num.toString());//It convert number into string
console.log(num.toFixed(2)); // it gives the after decimal two digit number

const subscribers = 100000;
console.log(subscribers.toLocaleString());
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Math.PI);
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*100));