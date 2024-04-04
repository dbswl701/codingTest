// 스타트와 링크
const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n")
console.log(input)

// 구해야 하는 것: 4/2 -> 해서 최솟값
// 일단, 배열 만들기
const N = +input[0];
const newArr = []
for(let i = 1; i<=N; i++) {
  const temp = input[i].split(" ").map(item => +item);
  newArr.push(temp)
}

console.log(newArr)

// 그다음, n/2개씩 선택해서, sij, sji 다 더해서 최솟값 찾기
let teamA = 0;
let teamB = 0;

// 최소값 찾을 때 까지 (0) 돌거나, 다 돌면 끝!
// 아 선택이면, 조합...

// 조합 구하는 함수
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); 
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]); 
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}
const comb = getCombinations([...Array(N).keys()], N/2);
console.log(comb);// 반만 구하면 될 듯!

const combCut = comb.slice(0, comb.length/2);
console.log(combCut)

// 이제. combCut 의 배열 길이만큼 돌면서, 각 팀의 합을 구하고, 둘의 차이를 구한다!
const result = 0;
combCut.forEach(item => {
  /// teamA의 번호들, teamB의 번호들 구하기
  // teamA
  const teamA = item;
  const teamB = [...Array(N).keys()]
})