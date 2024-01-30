// issues with current async behaviour
function blockingCodeForMoreThanSec(){
    for(let i=0; i<10000000000; i++){
        //some task
    }
}

let x=10;

setTimeout(()=>{
    console.log('Timer 1 done')
},5000)

blockingCodeForMoreThanSec();

setTimeout(()=>{
    console.log('Timer 2 done')
},3000)

setTimeout(()=>{
    console.log('Timer 2 done')
},100)

blockingCodeForMoreThanSec();

console.log(x);