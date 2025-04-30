// echo 함수 - 일반 함수

(()=>{
  function echo<T>(msg: T):T {
    return msg;
  }


  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  console.log(echo<boolean>(true));
})();