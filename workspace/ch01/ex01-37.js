/*
Call by Value와 Call by Reference 차이
*/

// add10 함수: data1은 값 타입, data2는 참조 타입
function add10(data1, data2) {
  data1 += 10;
  data2[0] += 10;
  console.log(data1, data2);
}

let d1 = 80; // 원시 타입
let d2 = [80]; // 참조 타입

// 함수 호출 전 출력
console.log("함수 호출 이전", d1, d2[0]);
// add10 함수 호출
add10(d1, d2);
