//write a complex number class with two member functions that can add two complex number and multiply two complex number.

class Complex{
    constructor(real,img){
        this.real = real;
        this.img = img;
    }

    add(num){
        return `${this.real + num.real} + i${this.img + num.img}`
    }

    //(a+ib)(c+id) = ac + iad + ibc + i^2bd = ac + iad + ibc -bd = (ac - bd) +i (ad +bc)

    mult(num){
        return `${this.real * num.real - this.img * num.img} * i${this.real * num.img + this.img * num.img}`
    }
}

const c1 = new Complex(3,5);
const c2 = new Complex(4,6);

console.log(c1.add(c2));
console.log(c1.mult(c2));