var mlist = [1,2,3,4,5]
var i;

for (i = 0; i < mlist.length; i++) {
    console.log("Position =",mlist[i])
}

console.log('')

//Practice Problem
//Q1. Write a JavaScript program to encode a message in the language which hackers use to communicate.
    sentence = 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.';

    charToNum = {'a': 4, 'e': 3, 'i': 1, 'o': 0, 's':5};
    lowercaseSentence = sentence.toLowerCase();
    newStr = '';

    for (i = 0; i < lowercaseSentence.length; i++) {
        char = lowercaseSentence[i];
        newStr += charToNum[char] || char;
    }

    console.log(newStr);

    console.log('')

//Q2. Write a JavaScript program to find how many vowels are there in the sentence.
    myString = "Good, better, best. Never let it rest. 'Til your good is better and your better is best.";
    vowels = 0;

    for (i = 0; i < myString.length; i++) {
        switch (myString[i]) {
            case 'a':
            case 'e': 
            case 'i': 
            case 'o':
            case 'u':
                vowels++;
        }
    }

    console.log(vowels)

    console.log('')

//Q3. Write a JavaScript program which accepts a string as input and swap the case of each character.
    mySentence = 'My name is Yafet Daniel';
    newSentence = '';

    for (i = 0; i < mySentence.length; i++) {
        if (mySentence[i] == mySentence[i].toUpperCase()) {
            newSentence += mySentence[i].toLowerCase();
        }
        else if (mySentence[i] == mySentence[i].toLowerCase()) {
            newSentence += mySentence[i].toUpperCase();
        }
        else {
            newSentence += mySentence[i];
        }
    }

    console.log(newSentence);

    console.log('');

//Q4. Write a JavaScript for loop that will iterate from 0 to 10. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
    for (i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i,'is even')
        }
        else {
            console.log(i,'is odd')
        }
    }

    console.log('')

//Q5. Write a JavaScript function that will reverse all the words which are of odd length. The even length words are not changed.
    sampleString = 'There is exactly one space between each word and no punctuation is used';
    newString = sampleString.split(' ');
    myNewString = '';

    for (i = 0; i < newString.length; i++) {
        if (newString[i].length % 2 != 0) {
            for (j = newString[i].length-1; j >= 0; j--) {
                myNewString += newString[i][j];
            }
        }
        else {
            myNewString += newString[i];
        }

        if (i < newString.length - 1) {
            myNewString += ' ';
        }
    }

    console.log(myNewString);