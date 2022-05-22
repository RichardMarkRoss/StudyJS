var addSix = createBase(6);

function createBase(baseNumber) {
    return function(N) {
        return baseNumber + N;
    }
}

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27