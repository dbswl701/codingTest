function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(0);
  
  const dfs = (start) => {
      visited[start] = 1;
      
      // start에서 dest로 이어지는거 확인
      for(let dest = 0; dest < n; dest++) {
          // 방문한 노드인지 확인, 이어지는지 확인
          if (!visited[dest] && computers[start][dest])
              dfs(dest)
      }
  }
  
  for(let node = 0; node < n; node++) {
      if (!visited[node]){
          answer++;
          dfs(node);
      }

  }
  

  return answer;
}