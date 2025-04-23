/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
  - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨 
*/

globalThis.name = 'global'
const getPingname = () => {
  return this.name;
};
const baro = new Object();
baro.name = '바로핑'
baro.age = 9
baro.getName = getPingname;


const rara = {
  name:'라라핑',
  age : 8,
  getName: getPingname
}



console.log(getPingname());
console.log(baro.age,baro.getName())
console.log(rara.age, rara.getName())