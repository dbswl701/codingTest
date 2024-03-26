function solution(s) {
  let answer = 0;
  if (s.length % 2 !== 0) return 0;
  
  const isCorrect = (str) => {
      const stack = [];
      for(const bracket of str) {
          if (bracket === '(' || bracket ==='{' || bracket === '[') {
              stack.push(bracket);
          } else if (bracket === ')' && stack.at(-1) === '(') {
              stack.pop();
          } else if (bracket === ']' && stack.at(-1) === '[') {
              stack.pop();
          } else if (bracket === '}' && stack.at(-1) === '{') {
              stack.pop();
          }
      }
      return stack.length === 0 ? true : false;
  }
  
  const str = s.split('');
  for(let i = 0; i < str.length; i++) {
      str.push(str.shift());
      if(isCorrect(str)) answer++;
  }
  
  return answer;
}