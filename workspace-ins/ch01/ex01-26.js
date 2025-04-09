/*
배열 생성, 읽기, 쓰기
*/

// const arr = new Array(1, 2, 3); // [ 1, 2, 3 ] 생성
const arr = [ 1, 2, 3 ];
// 지정한 데이터를 배열의 마지막 요소로 추가한다.
arr.push(10); // [ 1, 2, 3, 10 ]
arr[4] = 20; // [ 1, 2, 3, 10, 20 ]
arr[5] = 30; // [ 1, 2, 3, 10, 20, 30 ]

// 기존 값을 변경
arr[1] = 100; // [ 1, 100, 3, 10, 20, 30 ]

// 중간 인덱스를 건너띄고
arr[9] = 200; // [ 1, 100, 3, 10, 20, 30, , , , 200 ]
// ......
// 배열의 마지막에 새로운 데이터 추가
arr[arr.length] = 300;
arr.push(400); // arr[arr.length] 대신 배열 메서드 push를 사용한게 쉬움

console.log('배열의 길이', arr.length);
console.log('배열의 마지막 값', arr[arr.length-1]);
console.log(typeof arr, arr);