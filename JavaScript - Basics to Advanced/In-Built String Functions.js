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

console.log('');

var exampleString = "This is Javascript tutorial";

// toUpperCase() - It converts our String -> uppercase characters
console.log(exampleString.toUpperCase());

// toLowerCase() - It converts our string -> lowercase characters
console.log(exampleString.toLowerCase());

// concat() - It merges two or more strings
var firstName = "JavaScript"
var lastName = "Playground"
console.log(exampleString.concat(firstName));
console.log(exampleString.concat(' ', firstName, ' ', lastName));

// We can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString);

// trim() - It removes extra spaces
var extraSpaceString = '              my string     ';
console.log(extraSpaceString.trim());

// charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string';
console.log(charAtExampleString.charAt(5));
console.log(charAtExampleString.charAt(11));

// split() - splits our string on the basis of the arguments passed
var sampleString = 'This is my sample string';
console.log(sampleString.split(' '));

var sampleString2 = "This,is,my,sample,string";
console.log(sampleString2.split(','));

var sampleString3 = "This is awesome";
console.log(sampleString3.split());

console.log('');

// Practice Problem 2
    var str1 = 'Today is';
    var str2 = ' A beautiful day '
    var str3 = ' In Hawaii. '
    Result = 'Today is a beautiful day in Hawaii.'

// 1. Use the str1, str2, str3 to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
var reformattedStr2 = (str2.toLowerCase()).trim(); 
var reformattedStr3 = (str3.toLowerCase()).trim();

var myResult = str1.concat(' ' + reformattedStr2 + ' ' + reformattedStr3);
console.log(myResult);

// 2. Convert this string to an array that holds different days. Also, capitalize all the characters.
    var mStr = "Mo Tu We Th Fr Sa Su";

var mStrUpperCase = mStr.toUpperCase();
var mStrDays = mStrUpperCase.split(' ');
console.log(mStrDays);


