//run on chrome console
// const arr=[1,2,3,4,5,6];
// x=arr[Symbol.iterator]();
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

function customIterator(arr){
    let idx=0;
    function next(){
        if(idx == arr.length){
            return {value:undefined, done:true};
        }
        const nextElement = arr[idx];
        idx++;
        return {value:nextElement, done:false}
    }
    return {next};
}
const x = customIterator([1,2,3,4,5]);
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());