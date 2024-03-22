// DFS와 BFS
const fs = require('fs');
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const [N, M, V] = input[0].split(' ').map(item => +item)

// matrix 만들기
const matrix = Array.from(new Array(N+1), () => new Array(N+1).fill(0));

// M 만큼 돌면서 matrix 만들기
for(let i = 1; i<=M; i++) {
  const [r, c] = input[i].split(' ').map((item) => +item);
  matrix[r][c] = 1;
  matrix[c][r] = 1;
}

const visited= Array(N+1).fill(false);
const result = [];

const DFS = (start) => {
  // 갔는지 체크
  visited[start] = true;
  result.push(start);

  for(let i = 1; i<=N; i++) {
    if (!visited[i] && matrix[start][i] === 1) {
      DFS(i);
    }
  }
}

DFS(V);

const BFS = (start) => {
  const queue = [start]
  result2.push(start);

  while(queue.length) {
    const cur = queue.shift();
    visited2[cur] = true;
    for(let i = 1; i<=N; i++) {
      if (!visited2[i] && matrix[cur][i] === 1) {
        visited2[i] = true;
        queue.push(i);
        result2.push(i);
      }
    }
  }
}

const result2 = [];
const visited2 = Array(N+1).fill(false);

BFS(V);
console.log(result.join(" "))
console.log(result2.join(" "));
