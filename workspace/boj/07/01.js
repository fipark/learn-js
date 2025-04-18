/*
제목: 행렬 덧셈
설명: 행렬을 2차원 배열로 만들어 더하는 문제
제출: https://www.acmicpc.net/submit/2738

문제
N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

입력
첫째 줄에 행렬의 크기 N 과 M이 주어진다. 
둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 
이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. 
N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.

출력
첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 
행렬의 각 원소는 공백으로 구분한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1 
3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100

예제 출력 1 
4 4 4
6 6 6
5 6 100

예제 입력 2
2 2
1 2
3 4
5 6
7 8

예제 출력 2
6 8
10 12

예제 입력 3
1 1
5
10

예제 출력 3
15

예제 입력 4
2 3
1 2 3
4 5 6
7 8 9
10 11 12

예제 출력 4
8 10 12
14 16 18

예제 입력 5
3 2
1 2
3 4
5 6
7 8
9 10
11 12

예제 출력 5
8 10
12 14
16 18

예제 입력 6
1 3
-1 -2 -3
1 2 3

예제 출력 6
0 0 0

예제 입력 7
2 2
0 0
0 0
0 0
0 0

예제 출력 7
0 0
0 0

예제 입력 8
3 1
1
2
3
4
5
6

예제 출력 8
5
7
9

예제 입력 9
2 2
100 100
100 100
-100 -100
-100 -100

예제 출력 9
0 0
0 0

예제 입력 10
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
17 18 19 20
21 22 23 24
25 26 27 28
29 30 31 32

예제 출력 10
18 20 22 24
26 28 30 32
34 36 38 40
42 44 46 48

예제 입력 11
2 3
1 0 -1
0 1 0
0 -1 1
1 0 -1

예제 출력 11
1 -1 0
1 1 -1
*/

// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장


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
