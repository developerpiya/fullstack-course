const obj = {
    x: 10,
    y: 20,

    display: function () {
        console.log(`value of x is ${this.x} and y is ${this.y}`);

        const inner = () => {
            console.log(`value of x is ${this.x} and y is ${this.y}`);
        }
        inner();
    }
}

obj.display();

console.log(this); // printing the global scope

//If we use arrow function it does not get the value of x and y