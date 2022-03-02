/**You are given two numbers n and k. For each number in the interval [1, n], your task is to calculate its largest divisor that is not divisible by k. Print the sum of these divisors.

Note: k is a prime number.

Input format

    The first line contains an integer T representing the number of test cases that will follow.
    Each test case consists of one line containing two integers n and k.

Output format

The output must contain the answer for each test case on a different line.

Each answer consists of a single integer.

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
  let n = +input.split("\n")[1].split(" ")[0];
  let k = +input.split("\n")[1].split(" ")[1];

  let n2 = +input.split("\n")[2].split(" ")[0];
  let k2 = +input.split("\n")[2].split(" ")[1];

  let n3 = +input.split("\n")[3].split(" ")[0];
  let k3 = +input.split("\n")[3].split(" ")[1];

  let n4 = +input.split("\n")[4].split(" ")[0];
  let k4 = +input.split("\n")[4].split(" ")[1];

  let nArr = [n, n2, n3, n4];
  let kArr = [k, k2, k3, k4];

  for (let i = 0; i < nArr.length; i++) {
    let x = 0;
    let nn = nArr[i];
    let kk = kArr[i];
    while (nn != 0) {
      let q = nn % kk;
      x += nn * (nn + 1);
      nn = q;
    }
    console.log(x);
  }
}
