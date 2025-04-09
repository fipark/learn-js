/*
if-else문
*/

//ex01-16.js

/*
if문
*/

// age가 20 이상이면 "성인" 출력
const age = 19;
if (age >= 20) {
  console.log("성인");
} else console.log("미성년자");

// num이 양수이면 "양수" 출력
const num = 5;
if (num > 0) {
  console.log("양수");
} else console.log("음수");

// num이 0이면 "0" 출력
if (num == 0) {
  console.log(0);
}

// password가 1234면 "로그인 성공!" 출력
const password = 1234;
if (password === 1234) {
  console.log("로그인 성공!");
}

// password가 1234가 아니면 "로그인 실패!" 출력
if (password !== 1234) {
  console.log("로그인 실패");
}

// num2가 짝수이면 "짝수" 출력
const num2 = 3;
if (num2 % 2 === 0) {
  console.log("짝수");
}

// num2가 홀수이면 "홀수" 출력
if (num2 % 2 !== 0) {
  console.log("홀수");
}

// num3가 3의 배수이면 "3의 배수" 출력
const num3 = 7;
if (num3 % 3 === 0) {
  console.log("3의 배수");
}

// num3가 3의 배수가 아니면 "3의 배수가 아님" 출력
if (num3 % 3 !== 0) {
  console.log("3의 배수가 아님");
}
