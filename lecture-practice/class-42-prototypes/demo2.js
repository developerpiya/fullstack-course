function Product(name, price){
    this.name = name;
    this.price = price;
}

const p = new Product("Iphone", 120000);

Product.prototype.display = function(){
    console.log('details of product', this);
}

p.display();

console.log(p.__proto__);

Product.prototype.toString = function(){
    return `Name: ${this.name} and price is ${this.price}`
}

console.log(p.toString());

delete Product.prototype.toString();

console.log(Product.prototype.toString())