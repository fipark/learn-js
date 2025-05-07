// 내장 객체 - Date
// ex07-09-02.ts 복사
// 내장 객체 - Date
// ex07-09-02.ts 복사
const dayjs = require('dayjs');

(()=>{
  
  const startDate = dayjs('2025-03-27');
  const finishDate = dayjs('2025-08-08'); // 년, 월(0부터 시작), 일

  console.log('JS 수업 시작일', getDate(startDate));
  console.log('수료일', getDate(finishDate));

  const today = dayjs(); // 현재 시간
  const diffDays = today.diff(startDate,'day');
  console.log(`오늘은 수업 시작일로부터 ${diffDays}일째입니다.`);

  const diffFinish = finishDate.diff(today,'day');
  console.log(`수업 종료일까지 ${diffFinish}일 남았습니다.`);

  // FIXME 우리 만난지 백일째되는 날이 언제인치 출력하세요.
  const hundredDays = startDate.add(100,'day');
  console.log(`우리 만난지 백일째 되는 날은 ${getDate(hundredDays)} 입니다.`);

  function getDate(date){
    // FIXME date를 YYYY-MM-DD 형식으로 변환하여 반환하는 함수를 작성하세요.
    return date.format('YYYY-MM-DD');
  }

})();