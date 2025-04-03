/*
switch문을 사용하여 학점을 출력하세요.
*/

const score = 100;

// 67/10 -> parseInt(6.7) -> 6
// 36.6/10 -> parseInt(3.66) -> 3
// 99/10 -> parseInt(9.9) -> 9
switch (parseInt(score/10)) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
}
