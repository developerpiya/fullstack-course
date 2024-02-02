//var variable
function varExample(){
    if(true){
        var x=10;
    }
    console.log(x)
}

varExample();

//let variable
function letExample(){
    if(true){
        let y=20;
        console.log(y);
    }
    // console.log(y); //throw error due to call out of block
}
letExample()

//const variable
function constExample(){
    if(true){
        const z=30;
        console.log(z);
        // z=40; //throw error bcs we can'nt reassign the constant value
        // console.log(z); 
    }
    // console.log(z); //throw an error bcz we cannot access const value out of scope
}
constExample();