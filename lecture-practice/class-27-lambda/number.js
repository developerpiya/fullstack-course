//MAX_VALUE
console.log(Number.MAX_VALUE);

//check weather the given number is valid range or not
function checkRange(num){
    if(num>0 || num<Number.MAX_VALUE){
        return "number is in valid range";
    }else{
        return "number is out of range";
    }
}
console.log(checkRange(50));

//MIN_VALUE
console.log(Number.MIN_VALUE);

smallPosValue = Number.MIN_VALUE;
console.log("it is zero",smallPosValue === 0);
console.log("It is less than 1",smallPosValue<1);

//MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);

//MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);

//Number methods
//(1) toString() method
const numb = 11;
// here use radix which provide the base and default base is 10
const binaryNumber = numb.toString(2); //it convert into binary number with base 2
console.log(binaryNumber); 

const octalString = numb.toString(8);
console.log(octalString);

const hexaString = numb.toString(6);
console.log(hexaString);

const num = 123.456;
const numString = num.toString();
console.log(numString); // number convert into string
console.log(typeof numString);

//(2) toExponential()  method
const num1 = 81.66;
console.log("exponential method",num1.toExponential());
console.log("exponential method",num1.toExponential(2));
console.log("exponential method",num1.toExponential(3));

//(3) toFixed - it convert the number into string with defined value after decimal places
const fixnum = 31.223455;
console.log("toFixed() method",fixnum.toFixed());
console.log(fixnum.toFixed(2));
console.log(fixnum.toFixed(4));

//(4) toPrecision()
const num2 = 31.567;
const num3 = 43.163;
console.log("toPrecision() method",num2.toPrecision());
console.log("toPrecision() method",num2.toPrecision(3));
console.log("toPrecision() method",num3.toPrecision(5));

//(5) valueOf()
const numObj = new Number(20);
console.log("valueOf method",typeof numObj);
const nums = numObj.valueOf();
console.log(nums);
console.log(typeof nums)