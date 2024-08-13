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
    


    