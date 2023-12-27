const arr = [1,3,4,5,6];
const result = arr.forEach((element)=>{
    console.log('Element is ',element);
})
console.log(result);

/**
 * map function retun an new array but forEach not return any thing
 */
const result1 = arr.map((element)=>{
    console.log('Element is ',element);
    return element = element;
})
console.log(result1);

const result2 = arr.map((elem)=>{
    return elem*2;
})
console.log(result2);

const products = [
    {
        id:1,
        name:'iphone',
        price:10000
    },
    {
        id:2,
        name:'oppo',
        price:20000
    },
    {
        id:3,
        name:'vivo',
        price:30000
    },

]
console.log(products);

const modifiedProducts = products.map((product)=>{
 return {
    id : product.id,
    name :product.name
 }
})
console.log(modifiedProducts);

/**
 * filter => It filters out elements based on some conditions .
 * here it does not return undefined also convert the undefined convert into boolean using TooBoolean but developer not used it
 */

const array = [1,2,3,4,5,6,7];

const oddelements = array.filter((elem)=>{
    return elem % 2 !=0;
})
console.log(oddelements, array);

//use map
const newArray = [1,2,3,4,5,6,7];

const oddelem = newArray.map((elem)=>{
    if(elem % 2 !=0) return elem;
})
console.log(oddelem);

