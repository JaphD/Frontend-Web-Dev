function mSum() {
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;

    return sum;
}

var ourSum = mSum();

console.log(ourSum)

function greetings(name) {
    console.log('Welcome',name);
}

greetings('Yafet');

function sum(num1, num2, num3) {
    if (num3 !== undefined) {
        console.log(num1 + num2 + num3);
    }
    else {
        console.log(num1 + num2);
    }
}

sum(2,7)

function totalSum(num1 = 10, num2 = 20, num3 = 40) { //Default values can be passed as demonstrated
    console.log('num1 =>',num1);
    console.log('num2 =>',num2);
    console.log('num3 =>',num3)
    console.log(num1 + num2 + num3);
}

totalSum();

console.log('')

//Practice Problems
//Q1. Write a function sum(a, b) that takes two numbers as arguments and returns their sum.
    function sumOfNumbers(number1, number2) {
        return number1 + number2
    }

    console.log(sumOfNumbers(45,65))

    console.log('')

//Q2. Write a function factorial(n) that takes a non-negative integer n and returns the factorial of n. The factorial of a number n is the product of all positive integers less than or equal to n.
//Solution One - More efficient as it uses less memory
    function factorial(number) {
        product = 1;
        for (i = number; i >= 1; i--) {
            product *= i;
        }
        return product;
    }

    console.log(factorial(6))
//Solution Two 
    function myFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * myFactorial(num - 1);
        }
    }
    console.log(myFactorial(4));
