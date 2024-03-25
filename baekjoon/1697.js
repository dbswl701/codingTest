// 숨바꼭질

const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(item => +item);

let maxMove = Math.abs(N-K);

const queue = [{cur: N, time: 0}];
const visited = new Array(100001).fill(0);
function solution () {

  // 가장 짧은 시간을 확인 -> bfs
    while(queue.length) {
    const {cur, time} = queue.shift();

    // 방문했는지 확인
    if (0 > cur || cur > 100000 || visited[cur] === 1) continue;
    if (cur === K) {
      return time;
    }
    visited[cur] = 1;
    queue.push({cur: cur+1, time: time+1});
    queue.push({cur: cur-1, time: time+1});
    queue.push({cur: cur*2, time: time+1});
  }

}
console.log(solution());
