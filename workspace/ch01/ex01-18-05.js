/* 

if문의 다양한 사용 예제
연산자는 +, -, *, / 만 입력가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력

*/

const { console } = require("inspector");

const operator = "/";
const n1 = 10;
const n2 = 20;

let result;

if (operator === "+") {
  result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
} else if (operator === "-") {
  result = n1 - n2;
  console.log(`${n1} - ${n2} = ${result}`);
} else if (operator === "*") {
  result = n1 * n2;
  console.log(`${n1} * ${n2} = ${result}`);
} else if (operator === "/") {
  result = n1 / n2;
  console.log(`${n1} / ${n2} = ${result}`);
} else {
  console.log("잘못된 입력");
}

// 1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
// 1은 월요일, 2는 화요일, ... 7은 일요일
// 1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력

const day = 6;

if (day === 1) {
  console.log("월요일");
} else if (day === 2) {
  console.log("화요일");
} else if (day === 3) {
  console.log("수요일");
} else if (day === 4) {
  console.log("목요일");
} else if (day === 5) {
  console.log("금요일");
} else if (day === 6) {
  console.log("토요일");
} else if (day === 7) {
  console.log("일요일");
} else console.log("잘못된 입력");

/*
1 ~ 12 사이의 월을 받아서 게절을 출력하는 프로그램
봄: 3 ~ 5월, 여름: 6 ~ 8월, 가을: 9 ~ 11월, 겨울: 12 ~ 2월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const month = "4";
if (month === 12 || month === 1 || month === 2) {
  console.log("겨울");
} else if (month === 3 || month === 4 || month === 5) {
  console.log("봄");
} else if (month === 6 || month === 7 || month === 8) {
  console.log("여름");
} else if (month === 9 || month === 10 || month === 11) {
  console.log("가을");
} else {
  console.log("잘못된 입력");
}
