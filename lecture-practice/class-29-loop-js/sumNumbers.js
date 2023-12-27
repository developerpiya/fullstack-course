let i=0;
do{
    console.log('i is ',i)
    i++;
}while(i<=5);

//Given a number x return the sum of digits of x

let x=5213;
let sum=0;
let j;
while(x>0){
    let lastDigit = x%10;
    sum+=lastDigit;
    x=Math.floor(x/10);
}
console.log('sum is ',sum);