def solution(arr1, arr2):
    
    # 각 행열의 행과 열의 수를 구하기
    r1, c1 = len(arr1), len(arr1[0])
    r2, c2 = len(arr2), len(arr2[0])
    
    answer = [[0] * c2 for _ in range(r1)]

    # arr1의 각 행
    for i in range(r1):
        # arr2의 각 열
        for j in range(c2):
            # 두 행렬 곱한 결과 더해줌
            for k in range(c1):
                answer[i][j] += arr1[i][k] * arr2[k][j]
    
    return answer