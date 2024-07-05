function solution(numbers, target) {
  let answer = 0;
  const dfs = (depth, sum) => {
      if (depth === numbers.length) {
          if (sum === target) answer++;
          return 0;
      } 
      
      dfs(depth + 1, sum + numbers[depth])
      dfs(depth + 1, sum - numbers[depth])
  }
  dfs(0, 0); // 0부터 시작, 현재 합 0
  return answer;
}