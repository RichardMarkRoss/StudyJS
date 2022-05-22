var firstWord = "Mary";
var secondWord = "Army";

function isAnagram(first, second) {
    var a = first.toLowerCase();
    var a = first.toLowerCase();

    a = a.split("").sort().join();
    b = b.split("").sort().join();

    return a == b;
}

console.log(isAnagram(firstWord, secondWord));