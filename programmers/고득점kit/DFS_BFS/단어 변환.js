function solution(begin, target, words) {
  const queue = [{str: begin, distance: 0}]
  
  const diffOne = (word, target) => {
      let diff = 0
      for(let i=0; i<target.length; i++) {
          if (target[i] !== word[i]) diff++
      }
      if (diff === 1) return true
      return false
  }
  // 정렬을 해보자!
  words.sort()
  const check = Array(words.length).fill(0)
  
  // 만약 target에 있는게 words에 없다면
  if (!words.includes(target)) return 0;
  // queue에 있는거에서 하나씩 빼서, 여기서 하나의 단어만 차이나는걸 선택
  while (queue.length) {
      // 만약 target과 같다면 종료
      const {str, distance} = queue.shift()
      if (str === target) {
          return distance;
      }
      // words 돌면서, 차이가 하나만 나는걸 비교
      for (let i=0; i<words.length; i++) {
          if (check[i] === 0 && diffOne(words[i], str)) {
              queue.push({str: words[i], distance: distance+1})
              check[i] = 1
          }
      }
  }
  return answer;
}