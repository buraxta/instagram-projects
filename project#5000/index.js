//what's the output?

let x = '{ "b": 1, "c": 2 }'; 
let y = JSON.parse(x); 
console.log(typeof y); 

/* Explanation: The code creates a string x that contains a JSON-encoded object with two properties 
“b” and “c”, and assigns it to the variable x. The JSON.parse() method is then used to parse the JSON-encoded 
string x into a JavaScript object, which is assigned to the variable y.
The console.log() statement then outputs the data type of y using the typeof operator. 
Since y is now an object, the output will be an object.*/