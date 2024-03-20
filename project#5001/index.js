function multiply(a,b){
    return a*b;
}
function calculate(operation, a, b){
    return operation(a,b);
}

console.log(calculate(multiply, 2, 3));