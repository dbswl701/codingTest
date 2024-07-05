function solution(sizes) {
  // 가로, 세로 중 더 큰 것이 가로로 오도록
  const width = []
  const height = []
  sizes.forEach(v => {
      if (v[0] >= v[1]) {
          width.push(v[0])
          height.push(v[1])
      } else {
          width.push(v[1])
          height.push(v[0])
      }
  })
  
  // 각각에서, 가장 큰 것 찾기
  width.sort((a, b) => b-a)
  height.sort((a, b) => b-a)
  
  return width[0] * height[0];
}