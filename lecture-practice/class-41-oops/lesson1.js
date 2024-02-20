class Product{
    constructor(n,p,d,i){
        this.name = n;
        this.price = p;
        this.description = d;
        this.image = i;
    }
}

const p1 = new Product('Iphone', 10000, 'Apple Iphone', 'some images');
console.log(p1);