const obj = {
    x: 10,
    y: 20,

    display: function () {
        console.log(`value of x is ${this.x} and y is ${this.y}`);

        const innerObj = {
            x: -1,
            y: -2,
            inner: () => {
                console.log(`value of x is ${this.x} and y is ${this.y}`);
            }
        }
        innerObj.inner();
    }
}

obj.display();

console.log(this); 

const obj1 = {
    name : 'deacode',
    age : 200,
    print : ()=>{
        console.log(this.name);
    }
}

obj1.print();