/*
제목: 문자열
설명: 문...제
제출: https://www.acmicpc.net/submit/9086

문제
문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

입력
입력의 첫 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 10)가 주어진다. 
각 테스트 케이스는 한 줄에 하나의 문자열이 주어진다. 
문자열은 알파벳 A~Z 대문자로 이루어지며 알파벳 사이에 공백은 없으며 문자열의 길이는 1000보다 작다.

출력
각 테스트 케이스에 대해서 주어진 문자열의 첫 글자와 마지막 글자를 연속하여 출력한다.

예제 입력 1
3
ACDKJFOWIEGHE
O
AB

예제 출력 1
AE
OO
AB
*/

// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장
  let test = data[0][0];

  for (let i = 1; i <= test; i++) {
    let word = data[i][0];
    console.log(word[0] + word[word.length - 1]);
  }

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
