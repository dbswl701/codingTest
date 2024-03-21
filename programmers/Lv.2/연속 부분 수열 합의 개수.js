function solution(elements) {

  const arr = [];
  
  // elements의 길이만큼 반복
  for(let i=1; i<=elements.length; i++) {
      for(let j=0; j<elements.length; j++) {
          // 자르기
          let value = elements.slice(j, i+j);
          
          // 만약 범위가 넘는다면,
          if (i+j > elements.length) {
              value = [...value, ...elements.slice(0, i+j-elements.length)]
          }
          // 배열에 추가
          arr.push(value.reduce((prev, acc) => prev + acc, 0));
      }
      
  }
  // 중복 제거
  const answer = [...new Set(arr)]
  
  return answer.length;
}