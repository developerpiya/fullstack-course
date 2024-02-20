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

                function f() {
                    if (true) {
                        let z = 99;
                    }
                    let y = 40;
                }
            }
        }
        innerObj.inner();
    }
}

obj.display();

console.log(this); // printing the global scope

//If we use arrow function it does not get the value of x and y