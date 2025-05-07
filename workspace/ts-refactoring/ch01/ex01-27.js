/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//배열의 모든 요소 출력

//배열의 합계
let sum = 0;
let oddSum = 0;
let evenSum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//짝수의 합계
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evenSum += arr[i];
  }
}
console.log(evenSum);

//홀수의 합계
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) {
    oddSum += arr[i];
  }
}
console.log(oddSum);
