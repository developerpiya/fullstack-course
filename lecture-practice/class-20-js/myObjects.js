const user = {
    username : "hc",
    "first name" :"JIya",
    name : 'piya',
    email : 'piya@gmail.com',
    age:20,
    isAdmin :false,
    isLoggedIn : true,
    tea: ['Lemon','peach','ginger'],
    address:{
        city:'jaipur',
        state:'Rajsthan',
    }
}
console.log(user.age);
console.log(user['age']);
console.log(user.tea[1]);
console.log(user.address.state);
console.log(user["address"]["state"]);

user.email= "hc@live.com";
console.log(user.email);

delete user.isAdmin;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.keyboard); //undefined
console.log(user.hasOwnProperty('tea'));
console.log(user.hasOwnProperty('keyboard'));
//conditional logics
//Iteration (looping)