# 컨베이어 벨트 위의 로봇

# 3 2
# 1 2 1 
# 2 1 2

# 돈다
# 2 1 2 
# 1 2 1

# 로봇 올리기
# (1) 1 2
# 1 2 1

# 돈다
# 1 (1) 1
# 2 1 2

# 로봇 이동
# 1 1 (0)
# 2 1 2

# 로봇 올리기
# (0) 1 (0)
# 2 1 2

# 내구도 0인거 개수 확인
# k = 2 -> 종료

# 입력
N, K = list(map(int, input().split()))
# 각 칸의 내구도
arr = list(map(int, input().split()))
# 로봇 위치 
location = [0 for _ in range(2*N)]

# 단계 확인
step = 1
# 내구성 0인칸 개수 확인
check = 0
# 올리는 위치
on = 0
# 내리는 위치
off = N-1

while True:
# while step < 10:
  # 돈다 v-> 올리는 위치, 내리는 위치 재설정
  on = (on+1) % (2*N)
  print('on:', on)

  # 내리는 위치에 있으면 즉시 내린다
  off = (on + N - 1) % (2*N)
  print('off:', off)
  location[off] = 0

  # 로봇 이동
  for i in range(N):
    # off-1 에서부터 뒤로 확인

    # off 위치 맞추기
    # 이동하려는 칸에 로봇이 없는지 확인
    # 이동하려는 칸의 내구도가 0이 아닌지 확인
    if location[(off-1-i)%(2*N)] == 1:
      new_off = (off-i)%(2*N)
      if location[new_off] == 0 and arr[off-i] != 0:
        location[new_off] = 0
        location[new_off] = 1
        arr[new_off] -= 1
        print('로봇 이동:', location)
        # 내구도 0이면 check 올리기
        if arr[new_off] == 0:
          check += 1

  # 올리는 위치에 있는 칸의 내구도가 0인지 확인
  if arr[on] != 0:
    # 로봇 올리기
    location[on] = 1
    print('올리는 위치의 내구도 확인:', location, '올리는 위치:', on)

  # 내구도가 0인 칸의 개수가 K개 이상이라면 과정 종료
  if check >= K:
    break
      
  step += 1

print(step)