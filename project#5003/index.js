let x = 0.1 + 0.2; 
let y = 0.3; 
console.log(x == y); 

/*
Explanation: When you run this code and print the result 
of x == y, you may be surprised to see that it returns false. 
This is because of a limitation in how JavaScript handles 
floating-point numbers.

In JavaScript, numbers are represented using the IEEE 754 
standard for floating-point arithmetic. This means that not 
all decimal numbers can be represented exactly as binary 
floating-point numbers.

In particular, the decimal number 0.1 cannot be represented 
exactly in binary floating-point format. When you add 0.1 and
0.2 in JavaScript, the result is actually slightly larger than 
0.3 due to rounding errors in the binary representation. Therefore, 
x is not equal to y.
*/