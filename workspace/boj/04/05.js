/*
제목: 공 넣기
설명: 배열에 값을 쓰는 문제
제출: https://www.acmicpc.net/submit/10810

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 
또, 1번부터 N번까지 번호가 적혀있는 공을 매우 많이 가지고 있다. 
가장 처음 바구니에는 공이 들어있지 않으며, 바구니에는 공을 1개만 넣을 수 있다.

도현이는 앞으로 M번 공을 넣으려고 한다. 
도현이는 한 번 공을 넣을 때, 공을 넣을 바구니 범위를 정하고, 정한 바구니에 모두 같은 번호가 적혀있는 공을 넣는다. 
만약, 바구니에 공이 이미 있는 경우에는 들어있는 공을 빼고, 새로 공을 넣는다. 
공을 넣을 바구니는 연속되어 있어야 한다.

공을 어떻게 넣을지가 주어졌을 때, M번 공을 넣은 이후에 각 바구니에 어떤 공이 들어 있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에 걸쳐서 공을 넣는 방법이 주어진다. 
각 방법은 세 정수 i j k로 이루어져 있으며, i번 바구니부터 j번 바구니까지에 k번 번호가 적혀져 있는 공을 넣는다는 뜻이다. 
예를 들어, 2 5 6은 2번 바구니부터 5번 바구니까지에 6번 공을 넣는다는 뜻이다. (1 ≤ i ≤ j ≤ N, 1 ≤ k ≤ N)
도현이는 입력으로 주어진 순서대로 공을 넣는다.

출력
1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다. 
공이 들어있지 않은 바구니는 0을 출력한다.

예제 입력 1 
5 4
1 2 3
3 4 4
1 4 1
2 2 2
예제 출력 1 
1 2 1 1 0
*/

// 메인 함수 실행
function main() {
  const data = getData(); // 입력된 데이터를 가져와 data에 저장
  const n = data[0][0];
  const result = new Array(n).fill(0);
  for (let i = 1; i < data.length; i++) {
    const rowArr = data[i];
    const x = rowArr[0];
    const y = rowArr[1];
    const z = rowArr[2];

    for (let k = x; k <= y; k++) {
      result[k - 1] = z;
    }
  }
  console.log(result.join(" "));
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
