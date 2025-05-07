const score = {
  userName: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

console.log("총점", score.sum());
console.log("평균", score.avg());
