let x = false; 
let y = "0"; 
let z = 0; 
  
console.log(x == y); 
console.log(x == z); 

/*
Explanation: In JavaScript, when you use the == 
operator to compare values of different types, 
the operands will be converted to a common type 
before the comparison is made. This process is 
called type coercion.

In the first comparison (x == y), x is a Boolean 
(false) and y is a string (“0”). Since both false 
and “0” can be coerced to the Boolean false, the 
comparison returns true.

In the second comparison (x == z), x is a Boolean 
(false) and z is a number (0). Since both false 
and 0 can be coerced to the number 0, the 
comparison returns true.
*/