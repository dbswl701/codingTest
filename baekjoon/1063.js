// 킹
const fs = require("fs");
let input = fs.readFileSync("./input_1063.txt").toString();
input = input.split("\r\n")
// king, stone, N
const [tempKing, tempStone, N] = input[0].split(" ");
const king = tempKing.split("");
const stone = tempStone.split("");
console.log(king, stone, N)

// 한 줄씩 읽기
for(let i = 1; i<=N; i++) {
  switch(input(i)) {
    case 'R':
      // 
      break;
  }
}