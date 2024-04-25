def solution(n):
    global answer
    answer = 0

    def is_valid(row, col):
        # 대각선 상에 퀸이 존재하는지 확인
        for i in range(row):
            # 같은 대각선인지 확인
            if abs(row - i) == abs(col - status[i]) or col == status[i]:
                return False
        return True

    def dfs(row):
        # [2, 0, 3, 1]
        global answer
        # 종료 조건 확인
        if row == n:
            answer += 1
            return

        # 현재 행의 각 열에 대해 유망한 위치에만 퀸을 놓음
        # 갈 수 있는지 검사
        for col in range(n):
            if is_valid(row, col):
                # 갈 수 있으면 그 col에 row 입력
                status[row] = col
                dfs(row + 1)

    # 각 열에 대해 퀸의 위치를 저장하는 리스트
    status = [-1] * n
    dfs(0)

    return answer

