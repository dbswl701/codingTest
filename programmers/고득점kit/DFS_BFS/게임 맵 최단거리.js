function solution(maps) {
  const queue = [{r:0, c:0, length: 1}]
  const dr = [-1, 0, 0, 1]
  const dc = [0, -1, 1, 0]
  
  while (queue.length) {
      // 일단 하나 뽑기
      const {r, c, length} = queue.shift()
      if (r === maps.length-1 && c === maps[0].length-1) return length;

      for (let i=0; i<4; i++) {
          const nr = r + dr[i]
          const nc = c + dc[i]
          if (0 <= nr && nr < maps.length && 0 <= nc && nc < maps[0].length && maps[nr][nc]) {
              // 갈 수 있다면, 다음 큐에 넣는다
              queue.push({r: nr, c:nc, length: length+1})
              // 그 칸 막기
              maps[nr][nc] = 0
          }
      }
  }
  return -1;
}
// queue에서 뺄 때 방문 처리를 하는 것 보다, queue에 넣을 때 visit체크를 하시는 게 더 빠르다.
// 꺼낼 때 체크를 하게 된다면 그 좌표를 꺼내서 visit 처리하기 전까지는 한 좌표가 여러 번 들어갈 수 있기 때문