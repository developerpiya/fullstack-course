function createCounter(){
    let count=0;
    return {
        //returning an object
        increment: function(){count+=1},
        decrement: function(){count-=1},
        getCount: function(){return count}
    }
}   

let c = createCounter();
c.increment(); //1
c.increment(); //2
console.log(c.getCount());
c.decrement(); //1
console.log(c.getCount());

//more about promise from MDN

const p1=Promise.resolve("calling next");
const p2=p1.then();
p2.then(
    (value)=>{
        console.log("f",p2);
        console.log("next promise onfullFilled");
        console.log(value) //calling next
    },
    (reason)=>{
        console.log(p2);
        console.log("next Promise onRejected");
        console.log(reason);
    }
)