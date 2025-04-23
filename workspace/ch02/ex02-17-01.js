var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다
    this.count++;
    const that = this;
    var visit2 = function(){
      that.count++;
    }
    visit2();
  },
};

myObj.visit();
myObj.visit();
console.log("방문자수", myObj.count);