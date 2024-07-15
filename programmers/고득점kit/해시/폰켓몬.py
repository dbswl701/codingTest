def solution(nums):
    # set을 통해 중복 제거
    set_nums = set(nums)
    n = len(nums)

    # 만약 n/2 보다 위 길이가 길다면, n/2만큼만 출력
    if n/2 < len(set_nums): return n/2
    else: return len(set_nums)
