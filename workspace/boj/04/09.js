/*
제목: 바구니 뒤집기
설명: 배열을 뒤집는 문제
제출: https://www.acmicpc.net/submit/10811

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다. 
바구니는 일렬로 놓여져 있고, 가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ..., 가장 오른쪽 바구니를 N번째 바구니라고 부른다. 
도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다. 
도현이는 한 번 순서를 역순으로 바꿀 때, 순서를 역순으로 만들 범위를 정하고, 그 범위에 들어있는 바구니의 순서를 역순으로 만든다.

바구니의 순서를 어떻게 바꿀지 주어졌을 때, 
M번 바구니의 순서를 역순으로 만든 다음, 바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에는 바구니의 순서를 역순으로 만드는 방법이 주어진다. 
방법은 i j로 나타내고, 왼쪽으로부터 i번째 바구니부터 j번째 바구니의 순서를 역순으로 만든다는 뜻이다. (1 ≤ i ≤ j ≤ N)
도현이는 입력으로 주어진 순서대로 바구니의 순서를 바꾼다.

출력
모든 순서를 바꾼 다음에, 가장 왼쪽에 있는 바구니부터 바구니에 적혀있는 순서를 공백으로 구분해 출력한다.

[AI가 추가한 테스트 케이스 10개]


예제 출력 1 
3 4 1 2 5

예제 입력 2 
3 2
1 2
2 3

예제 출력 2 
2 3 1

예제 입력 3
10 5
1 5
3 8
6 10
1 10
2 5

예제 출력 3
1 10 9 3 2 6 7 8 4 5

예제 입력 4
7 3
1 7
2 4
5 7

예제 출력 4
7 4 5 6 1 2 3

예제 입력 5
6 4
1 3
4 6
1 6
2 5

예제 출력 5
4 2 1 6 5 3

예제 입력 6
8 2
1 4
5 8

예제 출력 6
4 3 2 1 8 7 6 5

예제 입력 7
9 3
1 9
3 7
2 8

예제 출력 7
9 2 7 6 5 4 3 8 1

예제 입력 8
4 2
1 2
3 4

예제 출력 8
2 1 4 3

예제 입력 9
5 1
2 4

예제 출력 9
1 4 3 2 5

예제 입력 10
3 3
1 3
1 3
1 3

예제 출력 10
3 2 1

예제 입력 11
6 2
1 3
4 6

예제 출력 11
3 2 1 6 5 4

예제 입력 12
10 4
1 10
1 5
6 10
3 8

예제 출력 12
6 7 3 2 1 10 9 8 4 5


예제 입력 1 
5 4     1 2 3 4 5
1 2     2 1 3 4 5
3 4     2 1 4 3 5
1 4     3 4 1 2 5
2 2     3 4 1 2 5
*/
// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장
  const m = data[0][0];
  const n = data[0][1];
  let result = [];
  for (let i = 1; i <= m; i++) {
    result.push(i);
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
