/*
2차원 배열
*/

const num = [
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
  [6, 12, 18, 24],
];
let sum = 0;
for (let i of num) {
  for (let j of i) {
    sum += j;
  }
}
console.log(sum);
