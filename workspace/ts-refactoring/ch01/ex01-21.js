/*
반복문 - for문
*/

// 1부터 10까지 출력

// 1부터 10까지 홀수의 합계 출력. 25

// 1부터 10까지 짝수의 합계 출력. 30

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let oddsum = 0;
for (let i = 1; i <= 10; i += 2) {
  oddsum += i;
  console.log(oddsum);
}
let evensum = 0;
for (let i = 2; i <= 10; i += 2) {
  evensum += i;
  console.log(evensum);
}
