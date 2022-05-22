var output = (function(x) {
    delete x; // \delete the property of the object
    return x;
})(0);

console.log(output); //output is 0