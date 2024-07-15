def solution(clothes):
    answer = 1
    # 각 종류별로 몇개의 의상을 가지고 있는지 저장
    clothes_dict = {}
    
    for item in clothes:
        cloth, kind = item
        if kind in clothes_dict:
            clothes_dict[kind] += 1
        else:
            clothes_dict[kind] = 1
            
    # 각 종류별 의상 + 1을 다 곱한 값 -1 
    for value in clothes_dict.values():
        answer *= (value+1)
        
    return answer - 1