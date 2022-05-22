function func() {
    var priv = "secret code";
    return function() {
        return priv;
    }
}

var getPrive = func();
console.log(getPrive());