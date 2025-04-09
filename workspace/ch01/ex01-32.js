/*
매개변수를 가진 함수 - 도어락
*/

function doorlock(password) {
  const pwd = 1234;
  if (password === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("삐! 삐! 삐!");
  }
}
doorlock(1111);
doorlock(1234);
