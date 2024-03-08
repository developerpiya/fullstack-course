const m = new Map();

m.set('name','piya');
m.set('age',20);
m.set('hobby','coding');

console.log(m);

for(entry of m){
    console.log(entry);
}

m.forEach((key,value)=>{
    console.log(key,value);
})

const obj = {

}

obj.name = 'tiya';
obj.age=22;
obj.hobby='cricket';

console.log(obj);

//for of is iterable and for in is specefic