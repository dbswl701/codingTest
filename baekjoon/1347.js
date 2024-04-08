const fs = require('fs');
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const N = Number(input[0]);
// 각 칸을 (x,y)로 나타내면서, 나중에 최솟값 만큼 더해서 배열로 만들자
// direction: T, D, L, R
// const direction = {"T": 0}
// 0 1 2 3 // 0 -> D, 1 -> L, 2 -> T, 3-> R
const visited = [{r: 0, c: 0}];
let dir = 0;

for(const move of input[1].split('')) {
  console.log('move:', move)
  // 맨 마지막거 꺼내서
  const {r, c} = visited[visited.length-1];
  console.log('cur_r:', r, 'cur_c:', c);
  if (move === 'R') {
    // direction을 바꿔서 visited에 저장
    dir = (dir + 1) % 4;
    console.log('dir:', dir);
    // visited.push({r: cur_r, c:cur_c, direction: (direction + 3)%4})
  } else if (move === 'L') {
    // visited.push({r: cur_r, c:cur_c, direction: (direction + 1)%4})
    dir = (dir + 3) % 4;
    console.log('dir:', dir);
  } else {
    // F
    // dir에 따라서 달라진다. 
    // dir === 0 -> D -> r + 1, c=0
    console.log('dir:', dir);
    if (dir === 0) { 
      visited.push({r: r + 1, c:c});
    } else if (dir === 1) { // L -> r = 0, c - 1
      visited.push({r: r, c: c - 1});
    } else if (dir === 2) { // T -> r - 1, c = 0
      visited.push({r: r - 1, c: c});
    } else { // R -> r = 0, c + 1
      visited.push({r: r, c: c + 1});
    }
  }
}


console.log(visited);
console.log(visited.sort((a, b) => a['r']-b['r']))

console.log('------------------------------------------')
// 최소 찾기
visited.sort((a, b) => a['r']-b['r'])
let min_r = visited[0]['r'];
let max_r = visited[visited.length-1]['r'];

// r중 최솟값이 음수라면 그만큼 R에 더하기, c도 마찬가지
visited.sort((a, b) => a['c']-b['c'])

let min_c = visited[0]['c'];
let max_c = visited[visited.length-1]['c'];

console.log(min_r, max_r, min_c, max_c)
// matrix 만들기
const board = new Array(max_r - min_r + 1)
for(let i = 0; i<board.length; i++) {
  board[i] = new Array(max_c - min_c + 1).fill('#');
}
console.log(board);

// 최소값이 음수라면, 해당 값 만큼 나중에 더하기
min_r = min_r < 0 ? -min_r : 0;
min_c = min_c < 0 ? -min_c : 0;

// visited 돌면서 board 채우기
for(const item of visited) {
  board[item['r']+min_r][item['c']+min_c] = '.'
}

console.log(board);
