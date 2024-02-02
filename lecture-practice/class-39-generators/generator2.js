function* gen(){
    console.log("start");
    yield 10;

    console.log("middle");
    const x=10+(yield 30); //10+undefined=NaN
    console.log(x);
    yield x;
}
const v = gen();
console.log(v.next());
console.log(v.next());
// console.log(v.next()); //Here we find NaN
console.log(v.next(99));
