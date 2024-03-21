function solution(N, number) {
  const dp = Array.from(new Array(9), () => new Set());

  if (N === number) return 1;
  
  for(let i = 1; i<=8; i++) {
      // use 채우기
      dp[i].add(Number(String(N).repeat(i))); // N, NN, NNN
      for(let j = 1; j<i; j++) {
          // num1, num2 찾기
          for (const num1 of dp[j]) {
              for (const num2 of dp[i-j]) {
                  dp[i].add(num1 + num2);
                  dp[i].add(num1 * num2);
                  dp[i].add(num1 - num2);
                  dp[i].add(Math.floor(num1 / num2));
              }
          }
      }
      // number 찾기
      if (dp[i].has(number)) {
          return i;
      }
  }
  
  return -1;
}