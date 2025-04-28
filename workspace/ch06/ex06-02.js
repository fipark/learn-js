"use strict";
// 기본 타입
(() => {
    let str = 'hello';
    let age = 123;
    let done = true;
    //done = 'false'; // 컴파일 에러
    let nullVal = null;
    let emptyVal = undefined;
    let todo = { title: 'TypeScript 공부', done: false };
    let todoList = ['JavaScript', 'TypeScript'];
    let todoList2 = ['React', 'Next.js'];
    // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입.
    let items = ['타입스크립트', 123];
    // any: 모든 타입 허용. 최대한 쓰지 않는 게 좋다.
    let userName = '애니타입'; // tsc가 타입 체크를 하지 않음
    userName = 123;
    // unknown: 값을 저장할 때는 아무타입의 값이나 저장이 가능하지만, 사용할 때 추가적인 타입 체크 코드를 요구
    let userName2 = '언노운타입';
    userName2 = 234;
    // console.log(userName.toUpperCase()); // userName이 넘버타입이여서 toUpperCase 사용 불가
    if (typeof userName2 === 'string') { // 타입 가드
        console.log(userName2.toUpperCase());
    }
})();
