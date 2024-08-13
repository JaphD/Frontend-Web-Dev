var mFriends = ['Shaw', 'Clara', 'Vab', 'kun']

console.log(typeof(mFriends))
console.log(mFriends[3])


// Update a value
mFriends[0] = 'Shawn'
console.log(mFriends)

// Add more items
mFriends[4] = 'Yafet'
console.log(mFriends)

mFriends[10] = 'Tiffany'
console.log(mFriends)

// We can use the following the following approaches to add new elements
mFriends[mFriends.length - 1] = "Rob"
console.log(mFriends)

mFriends.push('Jack')
console.log(mFriends)

// Delete a value
var nLastValue = mFriends.pop()
console.log(mFriends)
console.log(nLastValue)

console.log('')

//Practice Problem
//Q1. Write a JavaScript program to find the longest string from a given array.
    array = ['asdf', 'sd', 'something','right','position'];
    
    const characters = []

    for (let i = 0; i < array.length; i++) {
        const count = array[i].length;
        characters.push(count);
    }
    
    longest = Math.max(...characters)
    largestStringIndex = 0;

    for (let i = 0; i < characters.length; i++)
        if (characters[i] == longest) {
            largestStringIndex = i;
        }

    console.log('Longest String in array:',array[largestStringIndex])

    console.log('')

//Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given array.
    array2 =  [NaN, 0, 15, false, -22, '',undefined, 47, null,94];
    
    const cleanedArray = array2.filter(element =>
        element !== 0 &&
        element !== false &&
        element !== undefined &&
        element !== null &&
        !Number.isNaN(element) &&
        element !== ''
    );

    console.log(cleanedArray)

    console.log('')

//Q3. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on.
//Now compute the sum of two parts and store into an array of size two.
    myArray = [2, 6, 9, 13, 18, 20]

    myArray1 = [];
    myArray2 = [];

    condition = true;

    for (let i = 0; i < myArray.length; i++) {
        if (condition) {
            myArray1.push(myArray[i]);
            condition = false;
        }
        else {
            myArray2.push(myArray[i]);
            condition = true;
        }
    }

    var sum1 = 0;
    var sum2 = 0;
    outputArray = []

    for (let i = 0; i < myArray1.length; i++) {
        sum1 += myArray1[i]
    }
    outputArray.push(sum1)

    for (let i = 0; i < myArray2.length; i++) {
        sum2 += myArray2[i]
    }
    outputArray.push(sum2)

    console.log(outputArray)

    console.log('')

//Q4. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
    arr1 = [1,2,3];
    arr2 = [7,4,5];

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
            j++
        }
    }

    console.log("Output:",commonElementFound ? 'True' : 'False');

    console.log('')

//Q5. Write a JavaScript function to find the difference of two arrays.
    numberArray1 = [3, 6, 9, 23];
    numberArray2 = [6, 9, 15, 39];

    difference1 = [];
    difference2 = [];

    for (let i = 0; i < numberArray1.length; i++) {
        if (!numberArray2.includes(numberArray1[i])) {
            difference1.push(numberArray1[i]);
        }
    }

    for (let j = 0; j < numberArray2.length; j++) {
        if (!numberArray1.includes(numberArray2[j])) {
            difference2.push(numberArray2[j]);
        }
    }

    difference = difference1.concat(difference2);

    console.log(difference);









    