/*
제목: 그대로 출력하기
설명: 그대로 출력하기
제출: 

문제
입력 받은 대로 출력하는 프로그램을 작성하시오.

입력
입력이 주어진다. 
입력은 최대 100줄로 이루어져 있고, 알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있다. 
각 줄은 100글자를 넘지 않으며, 빈 줄은 주어지지 않는다. 
또, 각 줄은 공백으로 시작하지 않고, 공백으로 끝나지 않는다.

출력
입력받은 그대로 출력한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1
Hello
Baekjoon
Online Judge

예제 출력 1
Hello
Baekjoon
Online Judge

예제 입력 2
안녕하세요
반갑습니다
테스트케이스입니다

예제 출력 2
안녕하세요
반갑습니다
테스트케이스입니다

예제 입력 3
1
2
3
4
5

예제 출력 3
1
2
3
4
5

예제 입력 4
A
B
C

예제 출력 4
A
B
C

예제 입력 5
Hello World
JavaScript
Node.js

예제 출력 5
Hello World
JavaScript
Node.js

예제 입력 6
!@#$%^&*()
_+=-[]{}|;:'",.<>/?
`~

예제 출력 6
!@#$%^&*()
_+=-[]{}|;:'",.<>/?
`~

예제 입력 7
Line with spaces   
   Line with leading spaces
Line with trailing spaces   

예제 출력 7
Line with spaces   
   Line with leading spaces
Line with trailing spaces   

예제 입력 8
Empty line below

Second line

예제 출력 8
Empty line below

Second line

예제 입력 9
Very
Long
Input
With
Multiple
Lines

예제 출력 9
Very
Long
Input
With
Multiple
Lines

예제 입력 10
한글
English
123
!@#

예제 출력 10
한글
English
123
!@#

예제 입력 11
Single line input

예제 출력 11
Single line input
*/

// 메인 함수 실행
function main() {
  const data = getData();

  console.log();
}
main();

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
