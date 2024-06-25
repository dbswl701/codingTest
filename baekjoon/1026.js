// 보물
// b가 가장 클 때, a를 가장 작은수와 매칭한다.
const fs = require("fs");
let input = fs.readFileSync("./input_1026.txt").toString();
input = input.split("\n")
const N = +input[0];

const arrA = input[1].split(" ").map(item => +item);
const arrB = input[2].split(" ").map(item => +item);

// 이제, A와 B를 정렬. A -> 최소, B -> 최대
const newArrA = arrA.sort((a, b) => a - b);
const newArrB = arrB.sort((a, b) => b - a);

let result = 0;
for(let i = 0; i<N; i++) {
  result += newArrA[i] * newArrB[i];
}
console.log(result)
