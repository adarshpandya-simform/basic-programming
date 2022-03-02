/**
 * Alice has the following two types of taxis:

    Online taxi: It can be booked by using an online application from phones 
    Classic taxi: It can be booked anywhere on the road

The online taxis cost
for the first  km and for every km afterward. The classic taxis travel at a speed of km per minute. The cost of classic taxis are , , and 

 that represents the base fare, cost for every minute that is spent in the taxi, and cost for each kilometer that you ride.

You are going to the office from your home. Your task is to minimize the cost that you are required to pay. The distance from your home to the office is D. You are required to select whether you want to use online or classic taxis to go to your office. If both the taxis cost the same, then you must use an online taxi.

Input format

    First line: Single integer 

 that denotes the distance from your house to the office
Next line: Three integers 
 ,  , and 
  
Next line: Four integers
 ,  ,  , and 

Output format

If you select an online taxi to travel, then print a string 'Online Taxi'. Otherwise, select 'Classic Taxi'. You can print this string in a new, single line.

Constraints

1 
  

 109
Sample Input

13
6 7 4
4 2 1 2

Sample Output

Online Taxi

Time Limit: 1
Memory Limit: 64
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

  let d = +arr[0],
    oc = +arr[1].split(" ")[0],
    off = +arr[1].split(" ")[1],
    od = +arr[1].split(" ")[2],
    cs = arr[2].split(" ")[0],
    cb = arr[2].split(" ")[1],
    cm = arr[2].split(" ")[2],
    cd = arr[2].split(" ")[3];
  let cost1, cost2;
  cost1 = oc + (d - off) * od;
  cost2 = cb + (d / cs) * cm + d * cd;
  if (cost1 > cost2 || cost1 == cost2) console.log("Online Taxi");
  else console.log("Classic Taxi");
}
