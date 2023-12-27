//Task 1
const numbers = [1, 2, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//Task 2

const items = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Monitor', type: 'Electronic' },
    { name: 'Orange', type: 'fruit' },
];
const fruitNames = items.filter(item => item.type === "fruit").map(item => item.name);
console.log(fruitNames);

// Task 3
const numbers2 = [1, 2, 3, 4, 5];
let sumOdd = 0;
numbers2.forEach(num => {
    if (num % 2 !== 0) {
        sumOdd += num;
    }
})
console.log(sumOdd);

//Task 4
console.log('*****************');
// every method me jaha false mil jata h wahi se sb false ho jate h . isme agr ek bhi output false h to poora false ho jata h 
const arr = [1, , 5, 6, 9, 400, 5, 7];
const result = arr.every((elem) => {
    console.log(elem);
    return elem < 100;
})

// isme agr sare outputs false h tabhi false hoga
const arr2 = [3, 400, 700, 5, 6, 9];
const result2 = arr.some((elem) => {
    console.log(elem);
    return elem < 100;
})

