/*
!!! nums가 1개일 경우 배열이 아니라 숫자가 들어오기 때문에 주의해야 함

제목: 개수 세기
설명: 배열을 입력받고 v를 찾는 문제
제출: https://www.acmicpc.net/submit/10807

문제
총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 
둘째 줄에는 정수가 공백으로 구분되어져있다. 
셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 
입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다.

예제 입력 1
11
1 4 1 2 4 2 4 2 3 4 4
2
예제 출력 1
3

예제 입력 2
11
1 4 1 2 4 2 4 2 3 4 4
5
예제 출력 2
0

예제 입력 3
1
42
42
예제 출력 3
1
*/
// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장

  const a = data[0];
  const b = data[1];
  const c = data[2][0];
  let count = 0;
  for (i = 0; i < b.length; i++) {
    if (c === b[i]) {
      count++;
    }
  }
  console.log(count); // 가져온 데이터를 콘솔에 출력
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
