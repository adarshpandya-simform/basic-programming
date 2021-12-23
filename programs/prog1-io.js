/**
 * 
 * 
 * Problem

You are required to enter a word that consists of 
 and  that denote the number of Zs and Os respectively. The input word is considered similar to word zoo if 

.

Determine if the entered word is similar to word zoo.

For example, words such as zzoooo and zzzoooooo are similar to word zoo but not the words such as zzooo and zzzooooo.

Input format

    First line: A word that starts with several Zs and continues by several Os.
    Note: The maximum length of this word must be 

    .

Output format

Print Yes if the input word can be considered as the string zoo otherwise, print No.
Sample Input

zzzoooooo

Sample Output

Yes
 */

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  let z = input.match(/z/g).length;
  let o = input.match(/o/g).length;
  if (2 * z === o) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
