//FUnction constructor

function Product(n,p,d,i){
    this.name = n;
    this.price = p;
    this.des = d;
    this.image = i;

    this.display = function(){
        console.log(`Name ${this.name} price ${this.price}`)
    }
}

const p1 = new Product('Iphone', 10000, 'Apple Iphone', 'some images');

p1.display();

//we use function constructor due to backword compatible bcs some companies work on old process so some times whole project through an error
