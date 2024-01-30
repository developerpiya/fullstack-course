//JS only triggers the run time features
for(let i=0;i<1000000000;i++){

}//native piece of code blocking

for(let i=0;i<1000000000;i++){
    
}
console.log('starting timer 1');
setTimeout(()=>{
    console.log('Timer Done');
},20000)
console.log('starting timer 2');
setTimeout(()=>{
    console.log('Timer 2 Done');
},0)

for(let i=0;i<20;i++){
    
}
console.log('starting timer 3');
setTimeout(()=>{
    console.log('Timer 3 Done');
},100)
//js visualizer 9000 / loupe