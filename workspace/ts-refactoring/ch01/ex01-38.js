/*
전역 변수와 지역 변수
*/

const { setFlagsFromString } = require("v8");

function max(n1, n2) {
  if (n1 > n2) {
    result = n1;
  } else {
    result = n2;
  }
  return result;
}

console.log(max(10, 20));
console.log(max(200, 30));
console.log(result);
