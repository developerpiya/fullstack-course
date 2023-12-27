function factorial(){
    return [1,2,3,4,5].reduce((acc,val)=>acc*val,1);
}
console.log(factorial())

function factorial2(){
return [1,2,3,4,5].reduce(function reducer(acc,val){
    return acc * val
},1)
}

console.log(factorial2());

console.log(Array.from('foo'));
console.log(Array.from([1,2,3],(x)=>x*x));