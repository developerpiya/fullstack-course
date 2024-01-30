function isEvenOrOdd(x){
    // using console.trace we can print the order in which function is called
    console.trace('Trace of the function');
    return x%2 == 0;
}

const namedFunctionExpression = function exec(){
    const result = isEvenOrOdd(10);
}

const anonymousFuntionExpression = function(){
    const result = isEvenOrOdd(11);
}
anonymousFuntionExpression()

