class Product{
    constructor(n,p,d,i){
        this.name = n;
        this.price = p;
        this.description = d;
        this.image = i;
    }

    displayProduct(){
        setTimeout(()=>{
            console.log('Product details are',this.name,this.description,this.price,this.image);
        },5000);
    }
}

const p1 = new Product('Iphone', 10000, 'Apple Iphone', 'some images');
p1.displayProduct();

const p2 = new Product('Samsung', 10000, 'Apple Samsung', 'some images');
p2.displayProduct();