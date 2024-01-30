// write a function to calculate sum of three numbers passed as an arguments return as output.

function addNumbers(a,b,c){
    return a+b+c;
}
console.log(addNumbers(10,20,30));

// write a function to calculate su of some numbers passed as an argumnet return the sum as output.

/**
 * variable arguments -> argumnets keyword
 * -> spread operator
 */

function addAnyNumbers(){
    // no parameters passed in the function
    console.log(arguments);
    // arguments gives us access to a special object thet supports array like syntax and can be used to fetch all variables are.
    console.log(arguments.length);
    let result = 0;
    for(let i=0; i< arguments.length; i++){
         result += arguments[i];
    }
    return result;
}

//variable arguments
console.log(addAnyNumbers(9,2,4,56,7));
console.log(addAnyNumbers(1,2,3,4,5));
console.log(addAnyNumbers(1,2,4));
console.log(addAnyNumbers());


/**
 * H.W. 
 * 
 */
