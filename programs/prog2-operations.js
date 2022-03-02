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
  let num1 = +arr[1];
  let num2 = +arr[2];
  let result = 0;
  for (let j = 0; j < num1; j++) {
    let ref = Math.sqrt(num2);
    let i = 1;
    while (i <= ref) {
      i = i * 2;
      if (num2 % 2 >= i % 2) {
        result = num2 - (num2 % i);
      } else {
        result = num2 - (i % 2) + 1;
      }
    }
    console.log(result);
  }
}
