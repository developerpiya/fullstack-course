// print the first 20 natural numbers in reverse order

//for loop
for(let i =20;i>=1;i--){
    console.log(i);
}
console.log("for loop End");

//while loop
var i = 20;
while(i>=1){
process.stdout.write(i + ' '); // This cmd only used in terminal
i-=1;
}
console.log('while loop end');

let result = '';
for(let i=1;i<=20;i++){
    result+=i+' ';
}
console.log(result);