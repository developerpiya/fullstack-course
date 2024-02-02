//closures
function doSomething(task){
    console.log("Initializing do something");
    setTimeout(()=>{
        console.log("timer done and task done",task);
    },3000);
    console.log("Exciting do something after initializing a timer");
}
doSomething("complete homework");

function outer(){
    let i = 0;
    let j =[1,2,3]; //want be using k inside inner
    function inner(){
        i +=1;
        console.log(j)
        return i;
    }
    i+=2;
    return inner;
}
x=outer();
x();
x();