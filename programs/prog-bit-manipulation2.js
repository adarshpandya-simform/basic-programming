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
  let tcs = +input.split("\n")[0];

  let num = +input.split("\n")[1];
  let arr = input
    .split("\n")[2]
    .split(" ")
    .map((num) => +num);
  let odd = 0,
    even = 0;

  for (let j = 0; j < num; j++) {
    if (arr[j] % 2 == 0) even++;
    else odd++;
  }

  if (odd > even) console.log(even);
  else console.log(odd);
}
