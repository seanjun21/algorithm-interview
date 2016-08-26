// Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.

/* let array1 =
[
 [2 5 7 3],

 [2 0 3 1],

 [3 7 3 8],

 [1 2 3 4]
]
 array1.length = 4

 * setting column zero
 array1[0][1] = 0
 array1[1][1] = 0
 array1[2][1] = 0
 array1[3][1] = 0

 * setting row zero
 array1[1][0] = 0
 array1[1][1] = 0
 array1[1][2] = 0
 array1[1][3] = 0

 1. Loop through entire 2D array.
 2. Then, loop through each sub-array.
 3. Once, we find 0, use that index to change column & row numbers to zeroes.

 */

function zero2DArray(array) {
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        for (let j = 0; j < row.length; j++) {

        }
    }
}


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