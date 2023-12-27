//evel function => It is capable of executing any expression passed in it.
 const result = eval(`4+5`);
 console.log(result);

 let x=10;
 let y = 20;
 console.log(x,y);

 eval(`x= ${y}`);
 console.log(x,y);

 /**
  * Note => Regex (REgular expression) - pattern that helps to group similar kind of strings.
  * 
  * Google => create regex online
  * s* means find s in all string strats with 0 to last 
  * we would not write the regex use google to write it
  * It's used for password,email validation etc...
  */


 /**
  * common component inside the Regex matching => 
  * (1) character classes - set of characters we are going to allow in the string
  * [0-9] ->Any digit
  * [a-z] -> any small alphabet
  * [A-Z] -> any capital alphabet
  * https://regexr.com/
  */

 const regex = /[a-z]/;
 const str = "hello2";
 console.log(str.match(regex));
 console.log(regex.test(str)); // It matches the given string found in regex string or not

 const reg = /[A-Za-z0-9]/g; // g stands for global search 
 const str2 = "AsnjnjT34"; // i stands for case insensitive
 console.log(str2.match(reg)); //here also used unicode or check for hindi characters

 /**
  * Quantifier => It is used to check how many times character should occur
  * 
  *  "*" - means 0 or more occurences of any character
  * [so*y] - means after s or before y any character comes
  * [th*y] - means after t, 0 or more accurence of h
  * /sor*w?y/, /sor{5}*w?y/  - check in regex.com
  * 
  * 
  * "?" - means 0 or 1 occurence
  * "+" - means 1 or more occurence
  * {4} - inside the curly brashesh put the number and check occurences of numbers
  */

 /**
  *  ^ and $ in regex => ^ check begning of the string
  * $ check last of the string 
  * /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\>[a-zA-Z]{2,4}$/ => this regex used for email
  * 
  * Google => wild card matching
  * https://leetcode.com/problems/wildcard-matching/
  */

 /**
  * Application of regex => 
  * (1) authentication - match valid email and password
  * (2) frontend - form validation
  * (3) compiler and interpreter
  */