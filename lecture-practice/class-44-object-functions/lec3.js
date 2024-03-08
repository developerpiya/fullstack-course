const user ={
    name :'priya',
    age:23,
    profile:'developer',
    profession:'coding'
};
const {name,profile,profession,age} = user;
console.log(name,age,profession,profile) //key destructuring

//currying - return ke under return function
//Object.freeze() - It freeze or constant the value
const obj={a:10,b:20};
obj.a = 200;
Object.freeze(obj); // It does not change the value or delete the value it means it can't modify
console.log(obj)

//Object.seal() - is used only update the property . It can'nt add or remove any value in it

const obj1 = {
    name:'piya',
    company:'google',
    college:'SIT'
}
Object.seal(obj1);

obj1.from = 'Agra';//it can not be add in obj1 due to Object.seal()

console.log(obj1);

obj1.college = 'Eshan college of engineering'; //It only update the value of obj1

console.log(obj1);

//REsume website - latex, atsscoring website