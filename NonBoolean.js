// The question is when a non-boolean value is coerced to a boolean, 
// does it become true or false, respectively?

// The specific list of "falsy" values in JavaScript is as follows:

// "" (empty string)
// 0, -0, NaN (invalid number)
// null, undefined
// false
// Any value that's not on this "falsy" list is "truthy." 
// Here are some examples of those:

// "hello"
// 42
// true
// [ ], [ 1, "2", 3 ] (arrays)
// { }, { a: 42 } (objects)
// function foo() { .. } (functions)