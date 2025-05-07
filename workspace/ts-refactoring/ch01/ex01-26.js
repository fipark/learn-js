/*
배열 생성, 읽기, 쓰기
*/

const arr = new Array(1, 2, 3);
arr.push(10);
arr[4] = 20;

console.log(arr.length);
console.log(typeof arr, arr);
console.log("마지막값은", arr[arr.length - 1]);
