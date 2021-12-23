/**
 * You have been given an array A of size N consisting of positive integers. You need to find and print the product of all the number in this array Modulo

.

Input Format:
The first line contains a single integer N denoting the size of the array. The next line contains N space separated integers denoting the elements of the array

Output Format:
Print a single integer denoting the product of all the elements of the array Modulo
. 
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
  let size = +arr[0];
  let nums = arr[1].split(" ");
  let answer = 1;
  for (item of nums) {
    answer = (answer * +item) % (Math.pow(10, 9) + 7);
  }
  console.log(answer);
}
