function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  
}
main();

// 입력값 예시: 
// 10 20
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = parseInt(fileData[0]); // result.a = 10
  result.b = parseInt(fileData[1]); // result.b = 20

  return result;
}