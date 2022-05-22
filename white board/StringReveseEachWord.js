var string = "Welcome to this Javascript Guide!";

var reverseEntireSentence = reverseBySeparater(string, "");

var reverseEachWord = reverseBySeperator(reverseEntireSentence, " ");

function reverseBySeparater(string, separator) {
    return string.split(separator).reverse().join(separator);
}