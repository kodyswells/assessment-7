/*Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True */

const addToZero = (arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
})
// this would be a run time of O(n^2) because it is a nested loop

/*
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False */

const uniqueCharacter = (string) => {
    let characterCheck = {}

    for(let char of string) {
        if(characterCheck[char]){
            return false
        }
        characterCheck[char] = true
    }
    return true
}

console.log(uniqueCharacter('moonday'))

// this has a time complexity of O(n) as n is the length of the string

/*
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False */

const pangram = (string) => {
   string = string.toLowerCase()
   const alphabet = {
    'a': false, 'b': false, 'c': false, 'd': false, 'e': false,
    'f': false, 'g': false, 'h': false, 'i': false, 'j': false,
    'k': false, 'l': false, 'm': false, 'n': false, 'o': false,
    'p': false, 'q': false, 'r': false, 's': false, 't': false,
    'u': false, 'v': false, 'w': false, 'x': false, 'y': false, 'z': false
}

for (let char of string) {
    if ('a' <= char && char <= 'z') {
        alphabet[char] = true
    }
}

for (let letter in alphabet) {
    if (!alphabet[letter]) {
        return false
    }
}

return true
}

console.log(pangram("The quick brown fox jumps over the lazy dog!")) // true
console.log(pangram("I like cats, but not mice")) // false

// the time complexity of this function is O(n) becouse of the looping done with both the string conversion to lowercase and comparing it to the alphaabet object

/*
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5 
*/
const findLongestWord = ["hi", "hello"]

const longest = (arr) => {
    const length = arr.map(str => str.length)
    return Math.max(...length)
}

console.log(longest(findLongestWord))

// this function has a time complexity of O(n)