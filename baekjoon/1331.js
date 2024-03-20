// 나이트 투어
const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

// board 세팅 
const board = new Array(6);
for(let i = 0; i<6; i++) {
  board[i] = new Array(6).fill(0);
}

// 성공 여부 확인
let isValid = true;
const change = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F':5};

function solution() {
  // 이전 위치 확인
  let [prev_row, prev_col] = input[0].split('');
  prev_row = change[prev_row];
  prev_col = Number(prev_col)-1;
  board[prev_row][prev_col] = 1;

  // 입력 돌면서 확인
  for(let i = 1; i<input.length; i++) {
    const [row, col] = input[i].split('');
    const cur_row = change[row];
    const cur_col = Number(col)-1;
    
    // 방문했던 칸인지 확인
    if (board[cur_row][cur_col] === 1) {
      isValid = false;
      break;
    }

    // 나이트 경로인지 확인
    // 나이트는 row로 1칸, col로 2칸 / row로 2칸, col로 1칸 이동. 아래, 위 상관x
    if ((Math.abs(prev_row - cur_row) === 1 && Math.abs(prev_col - cur_col) === 2) || (Math.abs(prev_row - cur_row) === 2 && Math.abs(prev_col - cur_col) === 1)) {
      board[cur_row][cur_col] = 1;
      prev_row = cur_row;
      prev_col = cur_col;
    }
    else {
      isValid = false;
      break;
    }
  }

  // 보드의 모든 칸이 1로 채워졌는지 확인
  const isFulled = board.every(item => item.every(inner => inner === 1));
  if (!isFulled) {
    isValid = false;
  }

  // 마지막에 방문한 칸에서 처음으로 돌아올 수 있는지 확인
  let [first_row, first_col] = input[0].split('');
  first_row = change[first_row];
  first_col = Number(first_col)-1;

  let [last_row, last_col] = input[input.length-1].split('');
  last_row = change[last_row];
  last_col = Number(last_col)-1;
  if (!((Math.abs(first_row - last_row) === 1 && Math.abs(first_col - last_col) === 2) || (Math.abs(first_row - last_row) === 2 && Math.abs(first_col - last_col) === 1))) {
    isValid = false;
  }

  return isValid ? 'Valid' : 'Invalid'
}

console.log(solution());
