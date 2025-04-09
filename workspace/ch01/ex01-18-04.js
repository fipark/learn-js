const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

total =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement;
console.log(`총점: ${total}`);

average = total / 5;
console.log(`평균: ${average}`);

highscore = Math.max(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  softwareDesign
);
console.log(`최고점: ${highscore}`);

lowscore = Math.min(
  softwareDesign,
  softwareDevelopment,
  databaseSetup,
  programmingUsage,
  softwareDesign
);
console.log(`최저점: ${lowscore}`);

if (
  softwareDesign > 40 &&
  softwareDevelopment > 40 &&
  databaseSetup > 40 &&
  programmingUsage > 40 &&
  softwareDesign > 40 &&
  average > 60
) {
  console.log(`축하합니다.합격입니다.`);
}
