class Product{
    //property
    name;
    price;
    descripption;
    image;

    constructor(n,p,d,i){
        console.log('LOgging this before allocating value',this);
        
        // return []; 
        // if constructor not return anything then by default return the object 
        this.name = n;
        this.price = p;
        this.descripption = d;
        this.image = i;
        this.rating = 0; // default value
    }

    // (1) return nothing - newely created object return
    // (2) return primitive - newely created object
    // (3) return object - then object is only return

     // behaviours or methods
     buyProducts(){
        console.log('bought a new product');
     }
}


// new keyword creates a place
const obj = new Product("Iphone", 10000, "Apple Iphone", "some images");
console.log(obj);

const obj2 = new Product("Iphone-1", 20000, "Apple Iphone-2", "some images");
console.log(obj2);