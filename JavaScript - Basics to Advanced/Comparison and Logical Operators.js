// Checks the value but doesn't check the data type
if (5 == '5') {
    console.log(true)
}

// Checks the value as well the data type (Strict Comparison)
if (5 === 5) {
    console.log(true)
}

if (5 != 5) {
    console.log(true)
} else {
    console.log(false)
}

if (5 !== '5') {
    console.log(true)
} else {
    console.log(false)
}

if (5 < 10) {
    console.log(true)
} else {
    console.log(false)
}

if (5 >= 10) {
    console.log(true)
} else {
    console.log(false)
}

// Logical Operators &&, ||, !
if (5<10 && 10<15) {
    console.log(true)
} else {
    console.log(false)
}

console.log(5 < 10 || 10 < 15)
console.log(!(5 < 10))


//Ternary Operator (expression) ? a : b
20 < 3 ? console.log(true) : console.log(false)

// Practice Problem
var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;
d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
console.log(d);
if (d == 1){
console.log((a * (c - b) / e + (b + c)));
} 
else {
console.log((e * (c + a) / (b + c) + a));
}

var n = 2;
var p = 4;
var q = 5;
var w = 3;
if ( !((p * q) /n <= (q * w) + n/p )) {
console.log( ++p + w++ + " " + ++n);
}
else {
console.log(--p + q-- + " " + --n);
}
