// 유니언 타입(union type)

(()=>{
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }


  function log(msg: string | number| boolean){
    console.log(msg)
  }
  log('hello');
  log(123);



})();