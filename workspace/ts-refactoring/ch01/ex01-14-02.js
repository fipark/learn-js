/*
삼항 연산자 ?
*/
const fs = require("fs");
const fileBuffer = fs.readFileSync(0);
const data = fileBuffer.toString();
console.log(data);

let num = Number(data);
let result = num % 2 === 0 ? "짝수" : "홀수";
console.log(`${num}은 ${result}입니다`);
