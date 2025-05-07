/*
* 프로토타입 체인을 이용한 상속 기능 구현
*/

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng){
  this.kor = kor
  this.eng = eng 
}
HighSchool.prototype.sum = function(){
  return this.kor + this.eng
}
HighSchool.prototype.avg = function(){
  return Math.round(this.sum() /2)
}


const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng){
  this.kor = kor
  this.eng = eng
}
College.prototype.sum = function(){
  return this.kor + this.eng
}
College.prototype.avg = function(){
  return this.sum()/2
}
College.prototype.grade = function(){
  const avg = this.avg()
  if(90<=avg ) return 'A'
  else if(avg>=80) return 'B'
  else if(avg>=70) return 'C'
  else return 'D'
}

const c1 = new College(80, 71);
console.log(c1.sum());
console.log(c1.avg());
console.log(c1.grade());
console.log(College.prototype)