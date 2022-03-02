/**
 * Problem

Arpasland has surrounded by attackers. A truck enters the city. The driver claims the load is food and medicine from Iranians. Ali is one of the soldiers in Arpasland. He doubts about the truck, maybe it's from the siege. He knows that a tag is valid if the sum of every two consecutive digits of it is even and its letter is not a vowel. Determine if the tag of the truck is valid or not.

We consider the letters "A","E","I","O","U","Y" to be vowels for this problem.

Input Format

The first line contains a string of length 9. The format is "DDXDDD-DD", where D stands for a digit (non zero) and X is an uppercase english letter.

Output Format

Print "valid" (without quotes) if the tag is valid, print "invalid" otherwise (without quotes)
Sample Input

12X345-67

Sample Output

invalid

Time Limit: 1
Memory Limit: 256
Source Limit:
Explanation

The tag is invalid because the sum of first and second digit of it is odd (also the sum of 4'th and 5'th, 5'th and 6'th and 8'th and 9'th are odd).
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
  let tag = input.split("");
  let letter = tag[2];
  if (
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U" ||
    letter === "Y"
  ) {
    let sumIsEven = (+tag[0] + +tag[1]) % 2 === 0;
    if (sumIsEven) {
      let fifthPass = (+tag[3] + +tag[4]) % 2 === 0;
      let secondPass = (+tag[4] + +tag[5]) % 2 === 0;
      let thirdPass = (+tag[5] + +tag[7]) % 2 === 0;
      let fourthPass = (+tag[7] + +tag[8]) % 2 === 0;

      if (secondPass && fourthPass && fifthPass && thirdPass) {
        console.log("valid");
      } else {
        console.log("invalid");
      }
    }
  } else {
    console.log("invalid");
  }
}
