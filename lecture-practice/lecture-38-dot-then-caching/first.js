function createPromise(time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(time);
        },time)
    })
}
const resolver = (val)=>console.log('Resolving with',val); // if we make it arrow function and return nothing then bydefault it returns undefined
const rejector = (val)=>console.log('Rejecting with',val);

 const pr1 = createPromise(10000);
 console.log('pr1',pr1);

 const pr2=pr1.then(resolver, rejector);
 console.log('pr2',pr2);