/*
제목: 단어의 개수
설명: 단어의 개수를 구하는 문제
제출: https://www.acmicpc.net/submit/1152

문제
영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 
이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 
단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

입력
첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 
이 문자열의 길이는 1,000,000을 넘지 않는다. 
단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 
또한 문자열은 공백으로 시작하거나 끝날 수 있다.

출력
첫째 줄에 단어의 개수를 출력한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1
The Curious Case of Benjamin Button
예제 출력 1
6

예제 입력 2
 The first character is a blank
예제 출력 2
6

예제 입력 3
The last character is a blank 
예제 출력 3
6

예제 입력 4
a
예제 출력 4
1

예제 입력 5
 a 
예제 출력 5
1

예제 입력 6
Hello World
예제 출력 6
2

예제 입력 7
 
예제 출력 7
0

예제 입력 8
Programming is fun
예제 출력 8
3

예제 입력 9
One Two Three Four Five Six Seven Eight Nine Ten
예제 출력 9
10

예제 입력 10
a b c d e
예제 출력 10
5

예제 입력 11
ThisIsASingleWord
예제 출력 11
1

예제 입력 12
 Start and end with spaces 
예제 출력 12
5

예제 입력 13
A
예제 출력 13
1
*/

// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장
  for (let i = 1; i <= data.length; i++) {
    console.log(i);
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
