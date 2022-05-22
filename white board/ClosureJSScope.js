var globalVar = "abc";

(function outerFunction(outerArg) {
    var outerFuncVar = 'x';
    (function innerFunction(innerArg) {
        var innerFunVar = 'y';
        console.log(
            "outerArg = " + outerArg + "\n" +
            "outerFunVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFunVar = " + innerFunVar + "\n" +
            "globalVar = " + globalVar);
    })(5);
})(7);

// outerArg = 7
// outerFuncVar = x
// innerArg = 5
// innerFuncVar = y
// globalVar = abc