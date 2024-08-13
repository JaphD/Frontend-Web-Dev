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
//Q1. Write a JavaScript program to create a new array by reversing the elements of given
//array.
    arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f'];
    newArr = [];

    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i])
    }

    console.log(newArr)

    console.log('')