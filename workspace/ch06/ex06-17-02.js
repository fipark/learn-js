"use strict";
// echo 함수 - 일반 함수
(() => {
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(100));
    console.log(echo(true));
})();
