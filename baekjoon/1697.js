// 숨바꼭질

const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(item => +item);

const queue = [{cur: N, time: 0}];
const visited = new Array(100001).fill(0);
function solution () {

  // 가장 짧은 시간을 확인 -> bfs
    while(queue.length) {
    const {cur, time} = queue.shift();

    if (cur === K) {
      return time;
    }    
    visited[cur] = 1;

    for(let next of [cur+1, cur-1, cur*2]) {
      if (!visited[next] && 0<=next && next <=100000) {
        queue.push({cur: next, time: time+1});
      }
    }
  }

}
console.log(solution());
