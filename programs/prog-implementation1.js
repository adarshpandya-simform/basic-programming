/**
 * A group of students wants to visit a tour in some city . In total, the group has boys and

girls. To do this, they need to stay in a hotel.

Calculate the number of rooms you need to book in the hotel, if each hotel room has

seats, provided that the boys can not live with the girls in the same room.

Input format

    The first line specifies a number 

denoting the number of test cases.
In each line of the test case, there are three numbers,

    .

Output format

For each test case, print one number denoting the number of rooms to be booked at the hotel.

Constraints




Sample Input

4

13 7 2

5 5 3

2 2 2

5 4 5

Sample Output

11

4

2

2

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
  let info = arr.filter((item, index) => index !== 0);
  info.forEach((inf) => {
    let item = inf.split(" ");
    let [boys, girls, seat] = item;
    let total = Math.ceil(+boys / +seat) + Math.ceil(+girls / +seat);
    console.log(total);
  });
}
