/*
기본 데이터 타입 - BigInt
*/

var maxNum = Number.MAX_VALUE; //number로 표현 가능한 최대값
var maxsafeNum = Number.MAX_SAFE_INTEGER; //정확한 정수의 최대값 (약 9000조)

console.log(maxNum, maxsafeNum);
console.log(
  maxsafeNum - 1,
  maxsafeNum,
  maxsafeNum + 1,
  maxsafeNum + 2,
  maxsafeNum + 3
);

var b1 = 12345n;
var b2 = BigInt(maxsafeNum);
