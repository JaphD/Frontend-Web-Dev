var num1 = 10;

console.log(num1);
//console.log(num2);

function sum(num2) {
    var total = num1 + num2;
    //console.log(num1);
    console.log(total);
}

//console.log(total) - Because total is a local variable, it can't be accessed at a global scope

sum(20);