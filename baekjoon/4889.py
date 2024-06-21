def isStableStr(str):
  # str 중에서 {} 있으면 지우기
  for _ in range(len(str)):
    str = str.replace('{}', '')

  if len(str) == 0:
    return 0

  open_count = str.count('{')
  close_count = str.count('}')

  # 다 같다면, 절반만 바꾸면 된다
  if open_count == len(str) or close_count == len(str):
    return len(str)//2
  
  # 아니라면, 
  else:
    # 같은거끼리는 절반만 바꾸고,
    # 다른거끼리는 다 바꾼다
    diff = abs(open_count - close_count)
    answer = diff//2 + len(str)-diff
    return answer
    
# 입력 받기
step = 1
while True:
  str = input()
  if '-' in str:
    break

  # 안정적인 문자열인지 확인
  result = isStableStr(str)

  # print(step, '. ', result)
  print('%d. %d' %(step, result))
  step += 1