const str = "This is a new string";

//substring
console.log(str.substring(1,6)); // 1 is included but 6 is not included

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.split(" ")); // here divide the string space

const arr = str.split('');
console.log(arr);// It does'nt modified the original string

const arr2 = str.split('i');
console.log(arr2);

console.log(str.charAt(2)); //It gives the character at position 2
console.log(str.at(2)); // charAt() and at() both are same but charAt() is used for more readable
const result = str.concat(" new string");
console.log(result);

const num = parseInt("12345");
console.log(num, typeof num);

const s = "  Hii   priya   ";
console.log(s.trim()); // remove the begning and lasting spaces

const y = "This is a string";
console.log(y.replaceAll(' ',','));
console.log(y.split(" ").join("|"));

//H.W. - 

