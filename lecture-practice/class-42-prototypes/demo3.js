/**
 * Inheritance refers to passing down characterstics 
 */

class Electronics{
    getCategoryName(){
        return 'Electronics';
    }
}

class Camera extends Electronics{
    getSpecification(){
        console.log('Specs of camera.....');
    }
}

c = new Camera();

c.getSpecification();

console.log(c.getCategoryName());

console.log(Camera.prototype) //this refer to the electronic class prototype
