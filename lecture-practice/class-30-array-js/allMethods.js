//methods of array
//(1) slice
const fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(-4, -1)); //-4+5=1 -1+5=4
console.log(fruits.slice(2));

//(2) splice(start,deleteCount,item1,item2)
const numbers = [2, 3, 4, 2, 1];
const removed = numbers.splice(2, 3, 8, 9);
console.log("original array modified", numbers);
console.log("removed array", removed);

//(3) push - push at the last
fruits.push("Date");
console.log("push method", fruits);

//(4) pop - pop at the last and it modifies the array
fruits.pop();
console.log("pop method", fruits);

//(5) shift - it remove the element at starting
fruits.shift("Lemon");
console.log("shift method", fruits);

//(6) unshift - it add element at the starting
fruits.unshift("lemon");
console.log("unshift method", fruits);

//(7) reverse()
console.log("reverse method", fruits.reverse());

//(8) join()
console.log("join method", fruits.join("|"));

//(9) toSTring method
console.log("toString method", numbers.toString())
console.log("toString method", typeof numbers.toString())

//(10) delete()
console.log("delete method", delete fruits[1], fruits);

//(11) concat()
console.log("concat method", fruits.concat(numbers));

//(12) sort()
console.log("sort method", fruits.sort());
numbers.sort((a, b) => a - b);
console.log(numbers, typeof numbers);

//compare through letters
const obj = [
    { name: 'Piya', age: 22 },
    { name: 'Astha', age: 23 },
    { name: 'Pankha', age: 24 }
];
obj.sort((a, b) => {
    const namea = a.name.toUpperCase();
    const nameb = b.name.toUpperCase();
    if (namea < nameb) {
        return -1;
    }
    if (namea > nameb) {
        return 1;
    }
    return 0;
})
console.log("based on letters",obj);

//compare through numbers
obj.sort((a,b)=>a.age-b.age); //if the result is negative it comes after
console.log("based on number",obj);