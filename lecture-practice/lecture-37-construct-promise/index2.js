function CreateAsyncPromise(){
    return new Promise((res,rej)=>{
        //async algorithm
        setTimeout(function timerCompleted(){
            const value = Math.random();
            if(value < 0.5){
                res(value);
            }else{
                rej(value);
            }
        },5000)
    })
}
const response = CreateAsyncPromise();

console.log('promise',response);
for(let i = 0; i<100000000000; i++){
    //something
}

console.log('promise',response);
for(let i = 0; i<100000000000; i++){
    //something
}

//BOOK = you don't know JS