var num1 = 10;
var num2 = 15;
var num3 = 20;

//Addition
console.log(num1 + num2);
console.log(num1 + num2 + num3);

//Subtraction
console.log(num2 - num1);
console.log(num3 - num2 - num1);

//Multiplication
console.log(num1 * num2);

//Division 
console.log(num2/num1);

//Modulus
console.log(num2%num1);

//Increment - Post and Pre
console.log(num1++)
console.log(num1)

console.log(++num2)

//Decrement - Post and Pre
console.log(num3--)
console.log(num3)

console.log(--num3)


console.log('')

//Practice Problems
var num1 = 1 + 5;
var num2 = num1 / 4;
var num3 = 1 + 5;
var num4 = num3 / 4;
console.log(num2 + " " + num4);

var a = 1;
var b = 2;
var c;
var d;
c = ++b;
d = a++;
c++;
b++;
++a;
console.log(a + " " + b + " " + c);

var input = 7;
var output1 = ++input + ++input + ++input;
var output2 = input++ + input++ + input++;
var output3 = input++ + ++input + input++;
console.log(output1 + ' ' + output2 + ' ' + output3);
