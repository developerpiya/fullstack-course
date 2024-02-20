const obj = {
    x: 10,
    y: 20,

    nested: {
        y: 30,
        z: 40,
        displayinner: function () {
            console.log(`x is ${this.x} and y is ${this.y}`);
        },
    },

    displayouter: function () {
        console.log(`x is ${this.x} and z is ${this.y}`)
    }

}

obj.nested.displayinner();
obj.displayouter();

//clousure is a phenomena