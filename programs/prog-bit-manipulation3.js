/**
 * You are given a binary array (array consists of and )  that contains

elements. You can perform the following operation as many time as you like:

     Choose any index  

 and if it is currently 0, then convert it to 1 for C01 coins.
 Choose any index  

     and if it is currently 1, then convert it to 0 for C10 coins.

Your task is to transform the given array into a special array that for every index
, 

.

Here, 

 denotes XOR.

Input format

    The first line contains 

the number of test cases.
The first line of each test case contains three space-separated integers
, C01 and C10.
The second line consists of
 space-separated integers of array

    .

Output format

For each test case, print one line denoting the minimum cost to transform array

 into a special array.

Constraints

Sample Input

2

2 1 1

1 1

2 1 1

0 1

Sample Output

1

0
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
  let N = +input.split("\n")[1].split(" ")[0];
  let C01 = +input.split("\n")[1].split(" ")[1];
  let C10 = +input.split("\n")[1].split(" ")[2];
  let arr = input
    .split("\n")[2]
    .split(" ")
    .map((num) => +num);
  let firstHalf = String(arr[0]);
  let secondHalf = String(arr[1]);
  let sum1 = 0;
  let sum2 = 0;
  sum1 =
    (firstHalf.match(/1/g) || []).length * C10 +
    (secondHalf.match(/0/g) || []).length * C01;
  sum2 =
    (firstHalf.match(/0/g) || []).length * C01 +
    (secondHalf.match(/1/g) || []).length * C10;
  console.log(Math.min(sum1, sum2));
}
