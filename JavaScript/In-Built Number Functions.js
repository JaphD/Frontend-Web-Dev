var num1 = 10;
var num2 = 20.3;

// toString() - takes number as input and returns a string
console.log(num1.toString());
console.log(num2.toString());

var strNum1 = "10.3";
var strNum2 = "11.5";
var strNum3 = "ABC";

// parseInt() - takes string numeral as input and returns a number
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));

//parseFloat() - takes string numeral as an Input and returns a floating number
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));

// toFixed() - takes a floating number and rounds it off to a given position
var strFloat = 87.987653;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(5));

console.log('')

// Practice Problem
    console.log(toString(100)); // Wrong because it should be called with a dot notation directly on the object.
        // console.log((100).toString());
    console.log(parseInt('44'));
    console.log(parseInt('22.222'));
    console.log(parseInt('Banana')); // Wrong because the data type can't be parsed into an integer
    console.log(parseFloat(12));
    console.log(parseFloat(13.3));
    var num1 = 10; console.log(num1.toFixed(2));
    var num1 = 15.456789; console.log(num1.toFixed());
  //var num1 = 15.456789; console.log(number1.toFixed(2)); // Wrong because the variable name used is incorrect
    var num1 = 15.456789; console.log(num1.toFixed(3));
