/*
if문
*/

// age가 20 이상이면 "성인" 출력

// age가 20 미만이면 "미성년자" 출력

// num이 양수이면 "양수" 출력

// num이 음수이면 "음수" 출력

// num이 0이면 "0" 출력

// password가 1234면 "로그인 성공!" 출력

// password가 1234가 아니면 "로그인 실패!" 출력

// num2가 짝수이면 "짝수" 출력

// num2가 홀수이면 "홀수" 출력

// num3가 3의 배수이면 "3의 배수" 출력

// num3가 3의 배수가 아니면 "3의 배수가 아님" 출력
/*
if문을 사용하여 학점을 출력하세요.
*/

// score가 90 이상 100 이하이면 "A" 출력

// score가 80 이상 90 미만이면 "B" 출력

// score가 70 이상 80 미만이면 "C" 출력

// score가 60 이상 70 미만이면 "D" 출력

// score가 60 미만이면 "F" 출력
const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
//console.log(fileData);

const a = parseInt(fileData[0]);

if (a >= 90) {
  console.log("A");
} else if (a >= 80) {
  console.log("B");
} else if (a >= 70) {
  console.log("C");
} else if (a >= 60) {
  console.log("D");
} else {
  console.log("F");
}
