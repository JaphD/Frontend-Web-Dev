var myFirstString = 'I love JavaScript';
console.log(myFirstString);

var mySecondString = 'We will learn JavaScript together'
console.log(mySecondString);

// What if my string contains a double quote
var doubleQuoteString = "This is a \"JavaScript\" string"; //We can use an escape sequence to avoid an error
console.log(doubleQuoteString);

// Note: The same can be done for single quotes

// Alternatively
var doubleQuotesString2 = "This is a 'JavaScript' string"
console.log(doubleQuotesString2);

console.log('')

// Practice Problem
    console.log('JavaScript is Cool')
//  console.log('I'm gonna learn JavaScript') Gives an error because we haven't used an escape sequence or a combination of single and double quotes
    console.log("This is a \"test\" string")
//  console.log('This is another /'test/' string') Gives an error because we need to use backward slash not forward
    console.log('How about this string??')