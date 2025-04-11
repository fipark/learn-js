/*
제목: 문자열 반복
설명: 각 문자를 반복하여 출력하는 문제
제출: https://www.acmicpc.net/submit/2675

문제
문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다.
QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

입력
첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 
각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. 
S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 

출력
각 테스트 케이스에 대해 P를 출력한다.

예제 입력 1
2
3 ABC
5 /HTP

예제 출력 1
AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장
  const line = data[0][0];
  for (let i = 1; i <= line; i++) {
    let rowArr = data[i];
    let p = "";
    let num = rowArr[0];
    let word = rowArr[1];
    for (k = 0; k < word.length; k++) {
      for (j = 0; j < num; j++) {
        p += word[k];
      }
    }
    console.log(p);
  }
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
