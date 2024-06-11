# 일단 배열 입력 받기
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]

x, y = -1, -1

# search 0
for i in range(N):
	for j in range(N):
		if arr[i][j] == 0:
			x = i
			y = j
			break
		elif arr[j][i] == 0:
			x = j
			y = i
			break
	
total = 0
# 같은 행렬에 있는 것들 다 더하기
for i in range(N):
	total = total + arr[i][y] + arr[x][i]
	
print(total)