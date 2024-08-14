var mValue = 0;
while(mValue <= 50) {
    mValue++;
}

console.log(mValue);

//Practice Problem
//Q1. Write a JavaScript program to find the GCD of two numbers : 15 and 25.
//The GCD or Greatest Common Divisor of two integers is the largest integer that divides each of the integers such that their remainder is zero.
    input1 = 42;
    input2 = 12;

    while (input2 != 0) {
        temp = input2;
        input2 = input1 % input2;
        input1 = temp;
    }

    console.log(temp)

    console.log('')

//Q2. Write a JavaScript program to print the LCM of two numbers: 15 and 20?
//A common multiple is a number that is a multiple of two or more integers. e.g. The
//common multiples of 3 and 4 are 0, 12, 24, .... The least common multiple (LCM) of two
//numbers is the smallest number (not zero) that is a multiple of both.
    num1 = 5;
    num2 = 18;

    let gcd = num1;
    let tempB = num2;
    while (tempB !== 0) {
        let temp = tempB;
        tempB = gcd % tempB;
        gcd = temp;
    }

    // Using the relationship between the LCM and GCF.
    let lcm = (num1*num2)/gcd;

    console.log(lcm);

    console.log('');

//Q3. Write a JavaScript program to find the number of even values in sequence before
//the first occurrence of a given number. Hint: You can use while loop here
    myArray = [1,2,3,4,5,6,7,8,9,10,11,12];

    number = 10;

    index = 0;
    count = 0;

    while (myArray[index] < number) {
        if (myArray[index] % 2 ==0) {
            count++
        }
        index++
    }

    console.log(count)

    console.log('')

//Q4. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
