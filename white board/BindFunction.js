function fullName() {
    return "Hello, this is " + this.first + " " + this.last;
}
console.log(fullName()); // output: Hello, this is undefined undefined

var person = { first: "Richard", last: "Ross" };
console.log(fullName.bind(person)()); // output: Hello, this is Richard Ross