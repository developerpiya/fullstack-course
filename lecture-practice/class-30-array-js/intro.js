const languages = ["C","JS","JAVA","REACT","NODE","MONGO","CSS","HTML"];
const len = languages.length;
console.log(len);
console.log(languages);

//defined array using array keyword
const colors = Array("Red","Black","Green","Orange");
console.log(colors);
let i =0;
while(colors.length> i){
    console.log("using while loop",colors[i])
    i++;
}

//array with index
const players = ["virat","sachin","rehna"];
console.log(players[1]);
players[2] = "dhawan";
console.log(players[2]);
console.log(players[3]);
console.log(players[-1]);
console.log("using delete keyword",delete players[0]);
console.log(players);

//print array using for loop
const numbers = [1,2,3,4,5];
for(let index=0;index<numbers.length;index++){
    let element = numbers[index];
    console.log("using for loop",element);
}

//print array using for of loop
for(let element of numbers){
    console.log("using for of loop",element);
}

//print array using for in loop
for(let elem in numbers){
    console.log("using for in loop",numbers[elem]);
}