function mul(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}


console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));