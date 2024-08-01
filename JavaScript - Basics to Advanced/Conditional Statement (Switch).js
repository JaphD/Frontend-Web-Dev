var currentDay = 'Mon';

if (currentDay === 'Mon') {
    console.log('Timings: 10:00-06:00')
} else if (currentDay === 'Tue') {
    console.log('Timings: 09:00-05:00')
} else if (currentDay === 'Wed') {
    console.log('Timings: 09:30-05:30')
} else if (currentDay === 'Thu') {
    console.log('Timings: 10:15-06:15')
} else if (currentDay === 'Fri') {
    console.log('Timings: 09:05-05:05')
} else if (currentDay === 'Sat') {
    console.log('Timings: 09:00-05:00')
} else if (currentDay === 'Sun') {
    console.log('Timings: 09:00-01:00')
}

// Using Switch Statements

switch(currentDay) {
    case 'Mon':
        console.log('Timings: 10:00-06:00')
        break;
    case 'Tue':
        console.log('Timings: 09:00-05:00')
        break;
    case 'Wed':
        console.log('Timings: 09:30-05:30')
        break;
    case 'Thu':
        console.log('Timings: 10:15-06:15')
        break;
    case 'Fri':
        console.log('Timings: 09:05-05:05')
        break;
    case 'Sat':
        console.log('Timings: 09:00-05:00')
        break;
    case 'Sun':
        console.log('Timings: 09:00-01:00')
        break;
    default:
        console.log('Timings: 09:00-01:00')
}

console.log('')

// Practice Problems
// 1. Write a program to print the number of days in a month using a switch case.
// Change the value of monthNumber and check if your code works fine.
    var monthNumber = 3;

    switch (monthNumber) {
        case 1:
            console.log('Month = January \nTotal number of days = 31')
            break;
        case 2:
            console.log('Month = February \nTotal number of days = 30')
            break;
        case 3:
            console.log('Month = March \nTotal number of days = 31')
            break;
        case 4:
            console.log('Month = April \nTotal number of days = 30')
            break;
        case 5:
            console.log('Month = May \nTotal number of days = 31')
            break;
        case 6:
            console.log('Month = June \nTotal number of days = 30')
            break;
        case 7:
            console.log('Month = July \nTotal number of days = 31')
            break;
        case 8:
            console.log('Month = August \nTotal number of days = 31')
            break;
        case 9:
            console.log('Month = September \nTotal number of days = 30')
            break;
        case 10:
            console.log('Month = October \nTotal number of days = 31')
            break;
        case 11:
            console.log('Month = November \nTotal number of days = 30')
            break;
        case 12:
            console.log('Month = December \nTotal number of days = 31')
            break;
    }

console.log('')

// 2. Write a program to check vowel or consonant using switch case. Change the
// value of enteredAlphabet and check if your code works fine.
    var enteredAlphabet = 'g';

    switch (enteredAlphabet) {
        case 'a':
        case 'e': 
        case 'i': 
        case 'o':
        case 'u':
            console.log(enteredAlphabet + ' is a vowel')
            break;
        case 'b':
        case 'c': 
        case 'd': 
        case 'f': 
        case 'g': 
        case 'h': 
        case 'j': 
        case 'k': 
        case 'l': 
        case 'm':
        case 'n':
        case 'p': 
        case 'q': 
        case 'r': 
        case 's': 
        case 't': 
        case 'v': 
        case 'w': 
        case 'x': 
        case 'y':
        case 'z':
            console.log(enteredAlphabet + '  is a consonant')
            break;
    }

console.log('')

// 3. Write a program to check even or odd number using switch case. Change the
// value of enteredNumber and check if your code works fine.
    var enteredNumber = 50;
    var parity = enteredNumber % 2;

    switch (parity) {
        case 0:
            console.log(enteredNumber + ' is an even number')
            break;
        case 1:
            console.log(enteredNumber + ' is an odd number')
            break;
    }

