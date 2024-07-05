function solution(numbers) {
  const check = Array(numbers.length).fill(0)
  const result = []
  
  // numbers에 있는 것들의 모든 조합 return
  const dfs = (cur) => {
      result.push(cur)
      for (let idx = 0; idx<numbers.length; idx++) {
          if (!check[idx]) {
              check[idx] = 1
              dfs(cur + numbers[idx])
              check[idx] = 0
          }
      }
  }
  dfs("")
  result.shift()
  
  // 이제 소수 판별하기
  const isPrime = (num) => {
      if (num < 2) return false
      for (let i = 2; i<num; i++) {
          if (num % i === 0) return false
      }
      return true
  }
  return [...new Set([...result.map(v => +v)].filter(v => isPrime(v)))].length;
}