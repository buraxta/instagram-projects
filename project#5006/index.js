let x = "5";
let y = 2;

console.log(x + y);
console.log(x - y);

/*
Explanation: In the first statement, x is 
a string (“5”) and y is a number (2). When 
you use the + operator with a string and a 
number, JavaScript performs string concatenation: 
it converts the number to a string and then 
concatenates the two strings. So “5” and 2 are 
concatenated to produce the string “52”.

In the second statement, x is still a string (“5”) 
and y is still a number (2). However, when you use 
the – operator with a string and a number, JavaScript 
attempts to convert the string to a number. In this case,
 “5” can be converted to the number 5, so the expression 
 evaluates to 5 – 2, which is 3.
*/