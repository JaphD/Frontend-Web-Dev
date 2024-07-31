var myFirstString = "This is a string for JavaScript string functions";

// Returns the length of the string
console.log(myFirstString.length) 

// Find the index of a string inside another string
console.log(myFirstString.indexOf('JavaScript'));
console.log(myFirstString.indexOf('This'));

// Find the Last Index of a string inside another string
console.log(myFirstString.lastIndexOf('JavaScript'));
console.log(myFirstString.lastIndexOf('This'));

// Get a part of a string - slice(start, end) . Note that the end is n-1 thus doesn't include the nth index
console.log(myFirstString.slice(0,5));
console.log(myFirstString.slice(21, 31));
console.log(myFirstString.slice(-10));
console.log(myFirstString.slice(5));

// Get sub string function - substr(startPos, length)
console.log(myFirstString.substr(0,4))
console.log(myFirstString.substr())
console.log(myFirstString.substr(21))

console.log('')

// Practice Problem 1
    var myStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";

// 1. Find the length of the first sentence in the string.
    var firstSentenceEndIndex = myStr.indexOf('.');
    var firstSentenceLength = myStr.substr(0, firstSentenceEndIndex + 1).length;
    console.log(firstSentenceLength);
// 2. Find the length of the second sentence in the string.
    var secondSentenceStartIndex = myStr.indexOf('.') + 2;
    var secondSentenceLength = myStr.length - secondSentenceStartIndex;
    console.log(secondSentenceLength);
// 3. Find the first and last occurrence of the word "This"
    var firstOccurrence = myStr.indexOf("This");
    var lastOccurrence = myStr.lastIndexOf("This");
    console.log(firstOccurrence); 
    console.log(lastOccurrence);  
// 4. Find the sub-string with length 12 from the START of the string myStr
    var substringStart = myStr.substring(0,12);
    console.log(substringStart);
// 5. Find the sub-string with length 12 from the END of the string myStr
    var substringEnd = myStr.substring(myStr.length-12);
    console.log(substringEnd);



