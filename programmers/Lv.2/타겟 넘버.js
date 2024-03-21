function solution(numbers, target) {
  let answer = 0;

function dfs(index, currentSum) {
if (index === numbers.length) {
  if (currentSum === target) {
    answer++;
  }
  return;
}

// 현재 인덱스의 숫자를 더한 경우와 뺀 경우를 각각 호출
dfs(index + 1, currentSum + numbers[index]);
dfs(index + 1, currentSum - numbers[index]);
}

// 인덱스 0부터 시작하고 현재 합계는 0으로 초기화
dfs(0, 0);

return answer;
}