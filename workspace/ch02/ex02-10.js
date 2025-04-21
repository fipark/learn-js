// 기존 함수
let add = function (x, y) {
  return x + y;
};

// 화살표 함수
add = (x, y) => {
  return x + y;
};
// 화살표 함수 축약 => 실행할 코드가 단 한개면 가능
add = (x, y) => x + y;

// 출력문
console.log(add(10, 20));

// 기존 함수
let add10 = function (x) {
  return x + 10;
};

// 화살표 함수
add10 = (x) => {
  return x + 20;
};

// 화살표 함수 축약 => 실행할 코드가 단 한개면 가능
add10 = (x) => x + 20;

console.log(add10(100));