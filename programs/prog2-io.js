/**
 * You are provided an array  of size  that contains non-negative integers. Your task is to determine whether the number that is formed by selecting the last digit of all the N numbers is divisible by

.

Note: View the sample explanation section for more clarification.

Input format

    First line: A single integer 

 denoting the size of array 
Second line: 

     space-separated integers.

Output format

If the number is divisible by
, then print . Otherwise, print

.

Constraints

Sample Input

5

85 25 65 21 84

Sample Output

No

Time Limit: 1
Memory Limit: 256
Source Limit:
Explanation

Last digit of 
 is .
Last digit of  is .
Last digit of  is .
Last digit of  is .
Last digit of  is .
Therefore the number formed is  which is not divisible by 
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
  let onlyNum = input.split("\n");
  let nums = onlyNum[1].split(" ");
  let finalNum = +nums.map((num) => num[num.length - 1]).join("");
  if (finalNum % 10 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
