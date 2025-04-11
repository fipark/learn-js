/*
제목: X보다 작은 수
설명: 배열을 입력받고 X보다 작은 수를 찾는 문제
제출: https://www.acmicpc.net/submit/10871 

문제
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 
이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 
주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

출력
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

예제 입력 1
10 5
1 10 4 9 2 3 8 5 7 6

예제 출력 1
1 4 2 3
*/

// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장
  const a = data[0];
  const n = a[0];
  const x = a[1];
  const b = data[1];
  const array = [];
  let result = "";

  for (let i = 0; i < b.length; i++) {
    if (b[i] < x) {
      array.push(b[i]);
    }
  }
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i !== array.length - 1) {
      result += " ";
    }
  }
  console.log(result);

  // 가져온 데이터를 콘솔에 출력
}
main(); // main 함수 호출

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {object} 2차원 배열
 */
function getData() {
  const fs = require("fs"); // Node.js의 파일 시스템 모듈 로드
  const fileData = fs.readFileSync(0).toString(); // 표준 입력으로부터 데이터 읽고 문자열로 변환
  const arr = fileData.trim().split("\n"); // 입력받은 문자열 양 끝 공백 제거 후, 줄바꿈 기준으로 배열 생성

  const result = []; // 결과값 저장할 빈 배열 생성
  for (let i = 0; i < arr.length; i++) {
    // 각 줄마다 반복
    const row = arr[i]; // 현재 처리 중인 줄
    const rowArr = row.split(" "); // 공백을 기준으로 데이터를 나눠 배열 생성

    for (let k = 0; k < rowArr.length; k++) {
      // 나눈 각 데이터 항목에 대해 반복
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]); // 데이터가 숫자인 경우 정수형으로 변환하고, 아니면 그대로 유지
    }

    result.push(rowArr); // 변환된 데이터를 결과 배열에 추가
  }

  return result; // 완성된 2차원 배열 반환
}
