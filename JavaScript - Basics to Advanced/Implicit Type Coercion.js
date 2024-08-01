var mStr = 'Hello';
var mNum = 5;
var mSum = mStr + mNum; 
console.log(mSum);
console.log(typeof(mSum)) //// The number implicitly gets changed to a string.

console.log('hola' + true);
console.log(typeof('hola' + true)); // The boolean implicitly gets changed to a string.

console.log(50 + 'hola');
console.log(typeof(50 + 'hola')); // The integer implicitly gets changed to a string.

var mValue = +'2'
console.log(mValue)
console.log(typeof(mValue)) // String to Integer conversion


if (true) { //Anything that is not zero, null, undefined or empty, is going to be converted to true. If we use those values we get false.
    console.log('True')
} else {
    console.log('False')
}

console.log('')

//Practice Problem
console.log(true + false) // 1: true is 1, false is 0

console.log(12 / "6") // 2: "6" is converted to 6

console.log("number" + 15 + 3) // "number153": string concatenation

console.log(15 + 3 + "number") // "18number": 15 + 3 is 18, then concatenation

console.log(1 > null) // true: null is converted to 0

console.log("foo" + + "bar") // "fooNaN": +"bar" is NaN

console.log('true' == true) // false: different types, no coercion to same value

console.log(false == 'false') // false: different types, no coercion to same value

console.log(null == '') // false: null is only equal to undefined

console.log(!!"false" == !!"true") // true: both non-empty strings are true. Note: !! converts a value to its boolean equivalent.

