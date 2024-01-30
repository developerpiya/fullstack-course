//Disadvantage of callback based codes
//callback hell - code redability issue.
// callback hell means - callback inside a cb inside a cb. its like a piramyd like structure

function f1(x,cb){
    console.log(x);
    cb();
}

function f2(y,cb2){
    console.log(y);
    cb2();
}

f2(10, ()=>{
    f1(11,()=>{
        console.log('inside most callback of f1')
    })
})

//Inversion of control - you are given control of your code execution to some body else.
// promises is solve to problem of inversion of control
//like if we call call back two times in razorpay then monney deducted two times
