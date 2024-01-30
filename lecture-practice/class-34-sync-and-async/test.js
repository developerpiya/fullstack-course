for(let i=0; i<10000000000; i++){}

console.log('starting timer');
setTimeout(()=>{
    console.log('wait from setTimeout')
},10000);
console.log('timer triggered');