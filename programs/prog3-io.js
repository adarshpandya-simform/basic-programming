/**
 * You are given an array  of size  that contains integers. Here,

 is an even number. You are required to perform the following operations:

    Divide the array of numbers in two equal halves
    Note: Here, two equal parts of a test case are created by dividing the array into two equal parts.
    Take the first digit of the numbers that are available in the first half of the array (first 50% of the test case)
    Take the last digit of the numbers that are available in the second half of the array (second 50% of the test case)
    Generate a number by using the digits that have been selected in the above steps

Your task is to determine whether the newly-generated number is divisible by 

.

Input format

    First line: A single integer 

 denoting the size of array
Second line: 
 space-separated integers denoting the elements of array

Output format
If the newly-generated number is divisible by 
, then print . Otherwise, print 

.

Constraints

 
Sample Input

6

15478 8452 8232 874 985 4512

Sample Output

OUI
 */

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  let arr = input.split("\n");
  let size = arr[0];
  let nums = arr[1].split(" ");

  let medIndex = Math.ceil(nums.length / 2);
  let first = nums.splice(0, medIndex);
  let last = nums.splice(-medIndex);
  let firstNum = first.map((num) => num[0]);
  let lastNum = last.map((num) => num[num.length - 1]);
  let finalNum = firstNum.join("") + lastNum.join("");
  if (+finalNum % 11 === 0) {
    console.log("OUI");
  } else {
    console.log("NON");
  }
}
