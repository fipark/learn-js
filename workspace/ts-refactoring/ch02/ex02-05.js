/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언

function add (x , y){
  console.log(this)
  let result = x + y;
  return result

}
console.log(add(10, 20));