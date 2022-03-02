/**
 * You are given an integer such that the XOR of two integers is . In short

(⊕ denotes the bitwise the XOR operation).

Out of all possible pairs of
and

, you must find two integers such that their product is maximum. 

Let us define
as the length of in its binary representation. Then, and

.

Input format 

A single integer representing
(

)

Output format 

Print the maximum product you can achieve under the given conditions.
Sample Input

13

Sample Output

70

Time Limit: 1
Memory Limit: 256
Source Limit:
Explanation

The binary representation of 13 is "1101".

We can use A=10 ("1010" in binary) and B=7 ("0111" in binary). This gives us the product 70. No other valid pair (A,B) can give us a larger product.
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
  let n = +input,
    m = 0;
  for (let i = 0; i < n; i++) {
    let temp = i ^ n;
    temp = temp * i;
    if (temp > m) {
      m = temp;
    }
  }
  console.log(m);
}
