// 점프
const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const N = input[0];
const board = Array.from(N);

for(let i = 1; i<input.length; i++) {
  board[i-1] = input[i].split(" ").map(item => +item);
}

const dr = [0, 1];
const dc = [1, 0];
let answer = 0;

const dfs = (r, c) => {
 
  if (board[r][c] === 0) {
    answer++;
    return;
  }

  for(let i = 0; i < 2; i++) {
    const nr = r + dr[i] * board[r][c];
    const nc = c + dc[i] * board[r][c];

    if (0<= nr && nr < N && 0<=nc && nc <N) {
      dfs(nr, nc);
    }
  }
}

dfs(0, 0);
console.log(answer)