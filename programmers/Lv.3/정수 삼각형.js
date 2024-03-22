function solution(triangle) {
  // 맨 아래부터 돈다
  for(let layer = triangle.length-1; layer>=0; layer--) {
      for(let item = 0; item<triangle[layer].length-1; item++) {
          // 아래의 레이어 보고, 두개 중 최댓값 저장
          triangle[layer-1][item] += Math.max(triangle[layer][item], triangle[layer][item+1]);
      }
  }
  return triangle[0][0];
}
