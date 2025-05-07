"use strict";
// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(100));
    //console.log(echo<boolean>(true));
    const str = echo('hello');
    const num = echo(123.456);
    console.log(str.toUpperCase(), num.toFixed(2));
    function echo2(msg) {
        return msg;
    }
    //echo2<number>(100) // length 속성이 없음
    const str2 = echo2('hello');
    const num2 = echo2([10, 20]);
    console.log(str2.length, num2.length);
})();
