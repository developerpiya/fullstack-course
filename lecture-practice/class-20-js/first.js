//javascript MDN
//javascrpt specification (https://262.ecma-international.org/14.0/?_gl=1*190601p*_ga*MjA0MTQ3NzM4MS4xNzAxNDk1NjM3*_ga_TDCK4DWEPP*MTcwMzE0OTc4NC4yLjAuMTcwMzE0OTc4NC4wLjAuMA..&_ga=2.232156191.1080886269.1703149786-2041477381.1701495637)

/**
 * Type Conversion are two types
 * (1) Implicit Conversion
 * (2) Explicit Conversion
 */

let bankBalance = '100';

let bankBalanceinNumber = parseInt(bankBalance); 
// let bankBalanceinNumber = parseFloat(bankBalance); 
// let bankBalanceinNumber = Number(bankBalance); 
// let bankBalanceinNumber = String(bankBalance); 
// let bankBalanceinNumber = Boolean(bankBalance); 

console.log(typeof bankBalance, bankBalance);
console.log(typeof bankBalanceinNumber, bankBalance);
console.log(NaN == NaN);
console.log(5+undefined);//It have no memory space and value also
console.log(5+null);//null have memory but it not have value