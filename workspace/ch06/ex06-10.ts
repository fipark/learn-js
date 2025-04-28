// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사

(()=>{
  interface User {
    name: string;
    age : number;
  };


  //인터페이스를 객체의 타입을 지정
  const u1: User ={
    name: 'haru',
    age: 5
  }
  const u2: User ={
    name:'namu',
    age :8
  }
  console.log(u1.name, u2.name.toUpperCase())

  //함수의 리턴 타입으로 인터페이스 지정
  const createUser = function(name: string, age:number): User{
    return {name, age}
  }
  const u3: User = createUser('유저핑', 9);
  console.log(u3);

  //함수의 매개변수의 타입으로 인터페이스를 지정
  function getAge(user: User): number{
    return user.age;
  }
  console.log(getAge(u1))
  console.log(getAge(u2))
  
})();