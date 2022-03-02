/**
 * While playing a mental math game, you realize that the number k is mathematically beautiful.

You then realize that the number x can be mathematically beautiful if it is represented as a sum of a sequence where each element is a power of k and all the numbers in the sequence are different.

Task

Your task is to determine whether the number is mathematically beautiful.

Input format

    The first line contains T denoting the number of test cases.
    The next T lines contain 

  and  

      denoting the numbers.

Output Format

For each test case, output  "YES"  if

 is "mathematically beautiful" and  "NO"  otherwise.

Constraints

 
Sample Input

2
91 3
17 5

Sample Output

YES
NO

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
  nums.forEach((num) => {
    let flag = true;
    let arr = num.split(" ");
    while (+arr[0] > 0) {
      if (+arr[0] % +arr[1] >= 2) {
        console.log("NO");
        flag = false;
        break;
      } else {
        arr[0] = +arr[0] % +arr[1];
      }
    }
    flag && console.log("YES");
  });
}
