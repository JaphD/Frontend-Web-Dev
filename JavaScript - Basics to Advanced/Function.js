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
