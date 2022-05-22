(function() {
    var a = b = 5;
})();

console.log(b); //5

// The code above will output 5 even though it seems as 
// if the variable was declared within a function and 
// can't be accessed outside of it.