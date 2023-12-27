const myArray = [1,2,3,4,5,6];
const myNewArray = new Array (1,2,3,42,4,2,4);
console.log(myArray[1]);

const dcheros = ['piya','jiya','tiya','siya'];
console.log(dcheros);
console.log(dcheros.length);
dcheros[2] = 'wonder';
dcheros[dcheros.length]='woman';
dcheros.push('man');//Add value at the last
console.log(dcheros);

const lastheros = dcheros.pop(); //remove value at the last
console.log(lastheros);
console.log(dcheros);
dcheros.unshift('riya'); // add value at the starting
console.log(dcheros);
dcheros.shift();//remove value at the start
console.log(dcheros);

console.log(myArray.toString()); //array convert into string
console.log(myArray.join("_"));
console.log(dcheros.slice(1,3));//return the index 1 to 3 till value
console.log(dcheros.splice(1,2)); // it remove the value from index 1 to 2 above values now remaing array
console.log(dcheros);
