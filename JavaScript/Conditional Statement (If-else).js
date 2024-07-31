if (7 > 5) {
    console.log(true)
}

if (5 > 7) {
    console.log(true)
} else {
    console.log(false)
}

if (5 > 7) {
    console.log('5 > 7')
} else if(7 > 8) {
    console.log('7 > 8')
} else {
    console.log('Nothing')
}

console.log('')

// Practice Problem
// 1. Take the values given below of length and breadth of a rectangle and check if it is square or not.
//    Change values and see if your code works or not.
    var length = 200;
    var breadth = 200;

    if (length == breadth) {
        console.log('You have a square')
    } else {
        console.log('You have a rectangle')
    }

// 2. Write some code to check which number is greatest. Change values and see if your code works or not.
    var num1 = 5; var num2 = 8; var num3 = 20;

    if (num1 >= num2 && num1 >= num3) {
        console.log(num1 + " is the greatest number.");
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " is the greatest number.");
    } else {
        console.log(num3 + " is the greatest number.");
    }

// 3. Change the value of the enteredMarks and print the corresponding grade.
    var enteredMarks = 77;

    var grade;

    if (enteredMarks < 25) {
        grade = 'F';
    } else if (enteredMarks >= 25 && enteredMarks < 45) {
        grade = 'E';
    } else if (enteredMarks >= 45 && enteredMarks < 50) {
        grade = 'D';
    } else if (enteredMarks >= 50 && enteredMarks < 60) {
        grade = 'C';
    } else if (enteredMarks >= 60 && enteredMarks < 80) {
        grade = 'B';
    } else if (enteredMarks >= 80) {
        grade = 'A';
    }

    console.log("The letter grade is: " + grade);

// 4. A shop will give a discount of 10% if the cost of the purchased quantity is
//    more than 1000. Suppose, one unit will cost 100. Change the value of 
//    numberOfItemPurchased and print total cost for the user.

    var numberOfItemPurchases = 11;
    var costOfPurchasedQuantity = numberOfItemPurchases * 100;

    if (costOfPurchasedQuantity > 1000) {
        console.log(costOfPurchasedQuantity*0.9);
    } else {
        console.log(costOfPurchasedQuantity);
    }