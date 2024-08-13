var mFriends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
mFriends.splice(3,0, 'Donna', 'Rachel')

// 1st tells you where to start
// 2nd tells how many items to be deleted
// 3rd and 4th and so on tells what items to be added
console.log(mFriends)

mFriends.splice(0,0, 'Harvey')
console.log(mFriends)

// Delete item at specific position
mFriends.splice(2,1) // splice(position, number of items we want to remove)
console.log(mFriends)

mFriends.splice(0,2)
console.log(mFriends)

// Concatenation
var mOfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']
var mAllFriends = mFriends.concat(mOfficeFriends)

console.log('')

console.log(mFriends)
console.log(mOfficeFriends)
console.log(mAllFriends)

// Sorting Ascending and Descending

mAllFriends.sort() // Sorts in ascending order
console.log(mAllFriends)

mAllFriends.reverse() // Sorts in descending order
console.log(mAllFriends)

console.log('')

//Practice Problem
//Q1. Write a JavaScript program to create a new array by reversing the elements of given
//array.
arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f'];
newArr = [];

for (let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
}

console.log(newArr)

console.log('')

//Q2. Write a JavaScript program to check if there is at least one element which occurs in
//two given sorted arrays of integers.
    arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];
    arr2 = [7, 13, 25, 46, 58, 70, 84];

    i = 0;
    j = 0;
    let commonElementFound = false;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            commonElementFound = true;
            break;
        }
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else {
            j++;
        }
    }

    console.log(commonElementFound ? "There is at least one common element." : "No common elements found.")

    console.log('')

//Q3. Write a JavaScript program to check whether a given array of integers represents
//either a strictly increasing or a strictly decreasing sequence.
    newArray1 = [5,4,3,2,1];

    let isIncreasing = true;
    let isDecreasing = true;
    
    
    if (newArray1.length <= 1) {
        console.log("Array must have at least two elements to check for a sequence.");
    } else {
        
        for (let i = 1; i < newArray1.length; i++) {
            if (newArray1[i] <= newArray1[i - 1]) {
                isIncreasing = false;
            }
            if (newArray1[i] >= newArray1[i - 1]) {
                isDecreasing = false;
            }
        }
        if (isIncreasing) {
            console.log("The array is strictly increasing.");
        } else if (isDecreasing) {
            console.log("The array is strictly decreasing.");
        } else {
            console.log("The array is neither strictly increasing nor strictly decreasing.");
        }
    } 

    console.log('')

//Q4. Write a JavaScript function to convert an amount to coins.
    amount = 45;
    coins = [25, 10, 5, 2, 1];

    result = [];

    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            result.push(coins[i]);
        }
    }

    console.log(result)

    console.log('')

//Q5. Write a JavaScript function to create a new array from given array by formatting the
//numbers to human readable form with correct suffix like 1 to 1st, 2 to 2nd, 3 to 3rd and
//4 to 4th.
    let numbers = [22,8, 301, 404, 35, 99];
    let formattedNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let suffix = "th";

        if (num % 100 >= 11 && num % 100 <= 13) {
            suffix = "th";
        } else {
            switch (num % 10) {
                case 1:
                    suffix = "st";
                    break;
                case 2:
                    suffix = "nd";
                    break;
                case 3:
                    suffix = "rd";
                    break;
            }
        }

        formattedNumbers.push(num + suffix);
    }

    console.log(formattedNumbers); 
    
