//global scope

console.log(window.innerHeight);
console.log(window.innerWidth);

//we can also it in function or block

function run(){
    console.log(window.innerHeight);
}

let x=10;

function runblock(){
    x=2;
    y=3;
    z=5;
    console.log(x,y,z);
}
console.log(x);
console.log(y); // throw error y is not defined bcz y is block level scope
console.log(z);

for(let i=1;i<10;i++){
    console.log(i);
}

console.log(i) // throw error i is not defined bcz y is block level scope