const player = {
    firstname :'virat',
    lastname : 'kohli',
    numberTobat : 3
}

const details = function(x,y){
    console.log(this);
    console.log(x+y);
    console.log(`${this.firstname} ${this.lastname} comes to bat at no ${this.numberTobat}`);
}

details.apply(player, [10,20,30])

arr = [1,2,3];
arr.push([4,5,6]);
console.log(arr) // it push the whole array if we want the attach array indivisual

x=[7,8,9];

arr.push.apply(arr,x);
console.log(arr);

y=[3,4,5,6,7,8,8];
newarr = [...arr, ...y];
console.log(newarr);

//arguments keyword in mdn

function someNumbers(...numbers){
    console.log(numbers)
}
someNumbers(1,2,3,4,5,6,7,8,9)

