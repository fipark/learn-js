/*
반복문 - break, continue
*/

//n~m 까지의 정수중에서 첫번째 짝수를 찾아서 출력하시오.
const n = 1;
const m = 10;

for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    console.log(`첫번째 짝수는: ${i}`);
    break;
  }
}

for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log("홀수", i);
  }
}
