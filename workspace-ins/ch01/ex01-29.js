/*
2차원 배열
*/

const numbers = [
  [2, 4, 6, 8, 10], // numbers[0].length = 5
  [3, 6, 9], // numbers[1].length = 3
  [4, 8, 12, 16],
  [5, 10, 15, 20],
  [6, 12, 18, 24]
];

console.log(numbers[0]); // [2, 4, 6, 8]
console.log(numbers[1]); // [3, 6, 9, 12]
console.log(numbers[2]); // [4, 8, 12, 16]
console.log(numbers[3]); // [5, 10, 15, 20]

console.log(numbers[0][2]); // 6
console.log(numbers[3][2]); // 15

let sum = 0;
for (let i=0; i<numbers.length; i++) {
  const row = numbers[i]; // 한줄
  for (let k=0; k<row.length; k++) {
    console.log(row[k]);
    sum += row[k];
  }
}

// 이훈진
// for (const row of numbers) {
//   for (const num of row) {
//     sum += num;
//   }
// }

console.log(sum);