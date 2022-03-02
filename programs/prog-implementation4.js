/**
 * You are given an integer array . Your task is to calculate the sum of absolute difference of indices of first and last occurrence for every integer that is present in array

.

Formally, if element
occurs times in the array at indices , then the answer for will be  if array

is sorted.

You are required to calculate the sum of the answer for every such

that occurs in the array.

Refer to sample notes and explanations for better understanding.

Input format

    The first line contains an integer 

 that denotes the number of test cases.
The first line of each test case contains an integer
that denotes the number of elements in the array.
The second line of each test case contains
space seperated integers

    .

Output format

For each test case, print a single line as described in the problem statement.

Constraints

The sum of

over all test cases will not exceed 200000.
Sample Input

1

5

1 2 3 3 2

Sample Output

4
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
  let arr = [];
  let length = [];
  nums.forEach((num, index) => {
    if (index % 2 !== 0) {
      arr.push(num.split(" "));
    } else {
      length.push(num);
    }
  });
  arr.forEach((elem) => {
    let result = 0;
    let unique = new Set(elem);
    unique = [...unique];
    let res = [];
    unique.map((jk, i) => {
      res.push(getAllIndexes(elem, jk));
    });
    res.map((resp) => {
      resp = resp.sort();
      resp = resp.reverse();
    });
    res.map((resp) => {
      if (resp.length > 1) {
        let c = 0;
        resp.reduce((prev, current) => {
          c = prev - current;
        });
        result += c;
      }
    });
    console.log(result);
  });
}

function getAllIndexes(arr, val) {
  let indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}
