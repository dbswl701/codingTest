function solution(answers) {
  const answer = [];
  const st1 = [1, 2, 3, 4, 5]
  const st2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  
  // 정답 개수 확인
  const correct = [0, 0, 0]
  answers.forEach((v, idx) => {
      if (st1[idx%st1.length] === v) correct[0]++;
      if (st2[idx%st2.length] === v) correct[1]++;
      if (st3[idx%st3.length] === v) correct[2]++;
  })

  // 최대값 구하기
  const max_correct = Math.max(...correct)
  correct.map((v, idx) => {
      if (v === max_correct) return answer.push(idx+1)
  })
  return answer;
}