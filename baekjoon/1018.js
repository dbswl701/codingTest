// 체스판 다시 칠하기
const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split('\r\n');

// 체스판 크기 구하기
const [N, M]= input[0].split(' ');

// 체크판 배열로 담기
const board = [];
for(let i = 1; i<=M; i++) {
  console.log(input[i])
  board[i-1] = input[i].split('');
}

// 입력 돌면서, 하나하나 다 탐색하며 색칠해야 하는 최솟값 찾기. 8x8
// W로 시작하는 경우, B로 시작하는 경우 다 나눠서 생각

// W로 시작 -> W찾기 -> 00, 02, 04, 06, 11, 13, 15 -> 합이 짝수
// B 찾기 -> 01, 03, 05, 10, 12, 14 -> 합이 홀수
function solution() {
  let count = 0;
  for (let i=0; i<=N-8; i++) {
    for(let j=0; j<=M-8; j++) {

      for(let x=0; x<8; x++) {
        for(let y=0; y<8; y++) {
          // W로 시작 
          if ((x+y)%2 === 0) { // 짝수 =

          }
          // W 찾기 -> 짝수 일 때
          if ((x + y) / 2 === parseInt((x+y)/2) && board[x][y] !== 'W') count++;
          // B 찾기 -> 홀수 일 때
          if ((x + y) / 2 !== parseInt((x+y)/2) && board[x][y] !== 'B') count++;
        }
      }
    }
  }

  return count;
}

// 한 지점에 대해서, 나머지 찾기

console.log(solution())