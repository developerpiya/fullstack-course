//Js is a single threaded programming language

//case 1
let x=10;
for(let i=0; i<1000000000000000;i++){
    if(i%1000000000000000){
        x++;
    }
}
console.log(x); //native piece of code which means takes more time so block the code

//case 2 (features provided by runtime environment)
