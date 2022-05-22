function counter() {
    var _counter = 0;

    return {
        add: function(increment) { _counter += increment; },
        retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
}
var c = counter();

console.log(c.add(5));
console.log(c.retrieve());