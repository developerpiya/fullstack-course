function Reassignment(){
    let x=10;
    console.log(x);
    x='piya';
    console.log(x);
}
// Reassignment();

function constReassignment(){
    const x=10;
    console.log(x);
    x='piya'; //Error
    console.log(x);
}
// constReassignment();

// function objReassignment(){
//     const obj={x:10,y:20};
//     console.log(obj);
//     const obj = {a:2}; //here reassign a value Error
//     console.log(obj);
// }
// constReassignment();

function constUpdateobj(){
    const obj1 = {x:2,y:4};
    obj1.x = 6;
    obj1.y = 8; // update the obj1 so dont error
    console.log(obj1); 
}
constUpdateobj();