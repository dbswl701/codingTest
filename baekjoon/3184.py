# 양

# dfs를 이용하여 이어진 곳 모두 돈다
import sys
# N, M = map(int, sys.stdin.readline().split())
# board = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
# temp = list(map(int, sys.stdin.readline().split()))

r,c = map(int, sys.stdin.readline().split())
board = [list(sys.stdin.readline().rstrip()) for _ in range(r)]
print(r, c)
print(board)
dr = [0, 0, 1, -1]
dc = [1, -0, 0, 0]

# def dfs():

# def solution():
