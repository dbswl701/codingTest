// 체스

const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().trim().split('\n');

console.log(input)

const [N, M] = input[0].split(' ');
console.log(N, M)
// 보드 생성
const board = Array.from(N, () => new Array(M).fill(0));
console.log(board)
const checkDirection = (r, c, direction) => {
  let nr = r;
  let nc = c;
  if (direction === 'U') nr -= 1;
  if (direction === 'D') nr += 1;
  if (direction === 'L') nc -= 1;
  if (direction === 'R') nc += 1;
  if (direction === 'UL') {
    nr -=1;
    nc -=1;
  }
  if (direction === 'UR') {
    nr -=1;
    nc +=1;
  }  
  if (direction === 'DL') {
    nr +=1;
    nc -=1;
  }  
  if (direction === 'DR') {
    nr +=1;
    nc +=1;
  }
}

const move = (r, c, direction) => {
  let nr = r;
  let nc = c;
  while(true) {
    [nr, nc] = checkDirection(nr, nc, direction);
    if (0<= nr && nr < N && 0 <= nc && nc < M && board[nr][nc] !== 2) {
      board[nr][nc] = 1;
    } else {
      break;
    }
  }
}

// 보드에 말 표시
// 말 === 2, 갈 수 있는 곳 === 1

// Pawn
const PawnTemp = input[3].split(' ');
for(let i = 0; i<PawnTemp[0]; i += 2) {
  // Pawn을 2로 표시
  const r = PawnTemp[i+1]-1;
  const c = PawnTemp[i+2]-1;
  console.log(r, c)
  board[r][c] = 2;
}

// Knight
const dr = [1, 2, -1, -2];
const dc = [2, 1, -2, -1];
const KnightTemp = input[2].split(' ');
for(let i = 0; i<KnightTemp[0]; i += 2) {
  // Pawn을 2로 표시
  const r = KnightTemp[i+1]
  const c = KnightTemp[i+2];
  board[r-1][c-1] = 2;
  // 거기서 갈 수 있는 곳은 체크
  for(let i = 0; i<4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];

    if (0<= nr && nr < N && 0 <= nc && nc < M && board[nr][nc] !== 2) {
      board[nr][nc] = 1;
    }
  }
}


// Queen
const QueenTemp = input[1].split(' ');
for(let i =0; i<QueenTemp[0]; i += 2) {
  // Queen을 2로 표시
  const r = QueenTemp[i+1]-1;
  const c = QueenTemp[i+2]-1;
  board[r][c] = 2;

  // 갈 수 있는 곳은 1로 표시
  // 상하좌우 직진
  // 상
  move(r, c, "U")
  // 하
  move(r, c, "D")

  // 좌
  move(r, c, "L")

  // 우
  move(r, c, "D")

  // 대각선
  move(r, c, "UL")
  move(r, c, "UR")
  move(r, c, "DL")
  move(r, c, "DR")

}

console.log(board)