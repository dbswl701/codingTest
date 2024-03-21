function solution(tickets) {
  const answer = [];

  // tickets을 모두 사용해야 하기에, 티켓을 다 사용햿는가를 확인
  tickets.sort();
  const len = tickets.length;
  
  // 티켓 사용 여부 체크
  const visited = new Array(len).fill(false);
  
  const dfs = (cur, count) => {
      // 일단 그 티켓 사용 -> 경로에 추가
      answer.push(cur);
      
      // 만약 티켓을 다 썼다면
      if (count === len) return true;

      
      // 다음 경로 탐색
      for(let i = 0; i<len; i++) {
          // 그 티켓을 사용하지 않았고, 갈 수 있다면
          if (!visited[i] && tickets[i][0] === cur) {
              // 그 티켓을 사용
              visited[i] = true;
              
              // 만약 그 티켓을 써서 결국 티켓을 다 쓰게 된다면
              if (dfs(tickets[i][1], count+1)) return true;
              
              // 이 티켓 쓰면 답이 안나오니 돌아가기
              visited[i] = false;
          }
      }
      
      // 그 다음 경로가 없다!
      answer.pop(); // 경로 되돌리기
      return false;
      
  }

  dfs("ICN", 0);
  
  return answer;
}