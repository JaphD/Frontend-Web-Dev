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

    console.log('')

//Q3. Write a function isPalindrome(str) that checks if a given string str is a palindrome. A palindrome is a word that reads the same backward as forward, ignoring spaces and punctuation.
    function isPalindrome(string) {
        forwardString = string.toLowerCase();
        backwardString = '';

        for (i = forwardString.length-1; i >= 0; i--) {
            backwardString += forwardString[i]
        }

        if (backwardString === forwardString) {
            return true
        }
        else {
            return false
        }
    }

    console.log(isPalindrome('madam'))
    console.log(isPalindrome('hello'))

    console.log('')

//Q4. Write a function findMax(arr) that takes an array of numbers arr and returns the maximum number in the array. Do not use the built-in Math.max function.
    function findMax(arr) {
        max = arr[0];

        for (i = 1; i < arr.length; i++) {
            if (arr[i] >= max) {
                max = arr[i];
            }

        }
        return max;
    }

    console.log(findMax([-45, -19, -4, -2]));
    console.log(findMax([-50, -30, 5, 19]));

    console.log('')

//Q5. Write a function flattenArray(arr) that takes a nested array arr and returns a single array with all the elements flattened (i.e., no nested arrays).
    function flattenArray(array) {
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                newArray = newArray.concat(flattenArray(array[i]));
            } else {
                newArray.push(array[i]);
            }
        }

        return newArray;
    }

    console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));