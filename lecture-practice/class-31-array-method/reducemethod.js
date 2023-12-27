// Reduce method => this method is used to reduce an array to an single value

const shoppingCart = [
    { product: "Shoes", price: 80, quantity: 1 },
    { product: "Bag", price: 120, quantity: 2 },
    { product: "watch", price: 250, quantity: 4 }
]

//method 1 using forEach
let value = 0;
shoppingCart.forEach(product => {
    value += product.price * product.quantity;
})
console.log(value);

//method2 using reduce 

const res = shoppingCart.reduce(function reducer(accumulater, currentvalue) {
    console.log(accumulater, currentvalue);
    return accumulater + currentvalue.price * currentvalue.quantity
}, 0)
console.log(res);

// example
const res3 = shoppingCart.reduce(function reducer(accumulater, currentvalue) {
    console.log(accumulater, currentvalue);
    return accumulater+10;
}, 0)
console.log(res3);