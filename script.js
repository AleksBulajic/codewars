//  1. You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

// Return the string after rearranging the spaces.

// Input: text = "  this   is  a sentence "
// Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.




// /**
//  * @param {string} texts
//  * @return {string}
//  */


// const reorderSpaces = function(text) {
//     console.log(text)
//     const spaceCount = text.split(' ').length -1;
//     console.log(text.split(' '))
//     const words = text.trim().split(/\s+/);
    
//     if (words.length === 1) {
//       return words[0] + ' '.repeat(spaceCount);
//     }
    
//     const spaceBetweenWords = Math.floor(spaceCount / (words.length - 1));
//     const extraSpaces = spaceCount % (words.length - 1);
//     const result = words.join(' '.repeat(spaceBetweenWords)) + ' '.repeat(extraSpaces);
    
//     return result;
//   };

//   console.log(reorderSpaces("  this   is  a sentence "));
  

  //////////////////////////////////////////////////////////////
  
// 2.  You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.


/**
 * @param {number[]} nums
 * @return {number[]} 
 */
var sortEvenOdd = function(nums) {
  
};



// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){
  const splitName = name.split(" ")
 
  const firstName = splitName[0].split('')
  const lastName =  splitName[1].split('')

  return `${firstName[0]}.${lastName[0]}`
  }

  console.log(abbrevName("Sam Harris"))



//   Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

function findMinMax(arr) {
  let sorted = arr.sort((a, b) => a - b); 
  let reversedArr = [...sorted].reverse();
  return [sorted[0], reversedArr[0]];
}

console.log(findMinMax([1, 2, 3, 4, 5])); // [1, 5]

// console.log(findMinMax([1, 2, 3, 4, 5])); // [1, 5]
// console.log(findMinMax([233, 12, 45, 67, 89])); // [12, 233]
// console.log(findMinMax([-10, -5, 0, 5, 10])); // [-10, 10]
// console.log(findMinMax([100])); // [100, 100]



//*  Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


//Big O notation is 0(N)
function order(words) {
  // Check if input string is empty
  if (words === '') {
    return '';
  }

  // Split the input string into an array of words
  let splitWords = words.split(' ');
  
  // Create an array to store words in their correct order
  let result = new Array(splitWords.length);

  // Iterate over each word in the splitWords array
  splitWords.forEach(word => {
    // Extract the digit from the current word using a regular expression
    let index = word.match(/\d/)[0] - 1;
    
    // Place the current word at the correct position in the result array
    result[index] = word;
  });

  // Join the words in the result array into a single string separated by spaces
  return result.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))
