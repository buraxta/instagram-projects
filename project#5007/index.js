const obj = {
  value: 20,
  foo: function() {
    console.log(this.value);
  }
};

const bar = obj.foo;

bar(); 

/*
In JavaScript, when a function is defined 
within an object (a method), it has access 
to a special keyword this that refers to the
object itself. However, when you assign the 
method (obj.foo) to a separate variable (bar), 
this loses its context within obj.

When you call bar(), JavaScript attempts to use 
the global this (which is usually window in browsers), 
but the global object doesn't have a property named 
value. Hence, the output becomes undefined.
*/
