// Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.
'use strict'

/*
// Expected outcome
//   [2, 5, 0, 3],
//   [2, 3, 0, 9],
//   [3, 7, 0, 8],
//   [0, 0, 0, 0]
//

 1. Loop through entire 2D array.
 2. Then, loop through each sub-array.
 3. Once, we find 0, use that index to change column & row numbers to zeroes.

 */


let twoDArray = [
  [2, 5, 7, 3],
  [2, 3, 3, 9],
  [3, 7, 3, 8],
  [1, 2, 0, 8]
]

function zero2DArray(array) {
  let rowZero = {};
  let colZero = {};
  // Loop through each row
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        // Loop through each item in sub-array
        for (let j = 0; j < row.length; j++) {
          let item = row[j];
          if (item === 0) {
            rowZero[i] = true; // Check for 0 in that row
            colZero[j] = true; // Check for 0 in the column
          }
        }
    }
  console.log(rowZero, "rowZero")
  console.log(colZero, "colZero")

  for (let i = 0; i < array.length; i++) {
    let row = array[i];
    for (let j = 0; j < row.length; j++) {
      if((rowZero[i] || colZero[j])) {
        console.log(i) //3
        console.log(j) //2
        // turn all True to 0
        row[j] = 0;
      }
    }
  }

  return array;
}

console.log(zero2DArray(twoDArray), "<-- array")

// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.


// Write an algorithm which will sum two numbers stored in linked lists, where each node contains a single digit of the number.


// Write an algorithm which will find all pairs of number in an array which sum to a certain value.


// Implement a function to check if a tree is balanced (i.e. a tree where no two leaves differ in distance from the root by more than one).


// Given two rectangles in the following format, write a function which finds the rectangular intersection of the two:


/*{
 // Coordinates of bottom-left corner
 left: 1,
 bottom: 5,
 // Size
 width: 10,
 height: 4
 }*/
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 by calling String.indexOf only once.
