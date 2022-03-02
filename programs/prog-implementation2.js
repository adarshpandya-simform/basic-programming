/**
 * Problem

You are given a binary array
of

elements. The array consists of 0's and 1's. You can perform the following operations as many times as possible:

    Select a subarray starting from the first index that is inversion-free and delete it.

Determine the minimum number of operations to delete the entire array.

    Inversion free: There are no two indices 

and in array such that and (

    ). 
    Subarray: A subarray is an array obtained after deleting some elements from the beginning (prefix) possibly 0 and deleting some elements from the end (suffix) possibly 0.

Input format

    The first line contains an integer 

denoting the number of test cases. 
The first line of each test case contains an integer
denoting the number of elements in array
.
The second line contains
space-separated integers of array

    .

Output Format

Print

lines and for each test case:

    Print the minimum number of operations to delete the entire array.

Constraints

Sample Input

3

4

0 0 1 1

2

1 0

2

0 0

Sample Output

1

2

1
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
  let nums = input.split("\n").splice(1);
  let lengths = [];
  let arrs = [];
  nums.forEach((num, index) => {
    if (index % 2 !== 0) {
      arrs.push(num);
    } else {
      lengths.push(num);
    }
  });
  arrs.map((array) => {
    let inv_cases = 1;
    let arr = array.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i - 1] > +arr[i]) {
        inv_cases += 1;
      }
    }
    console.log(inv_cases);
  });
}
