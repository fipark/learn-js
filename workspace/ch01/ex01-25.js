/*
객체의 속성 관리
*/

const foo = {
  name: "푸푸핑",
  mainJob: "magician",
};

console.log(foo.name, foo.subJob);

foo.mainJob = "fariy";
foo.subJob = "celeb";
delete foo.mainJob;
console.log(foo);

for (let prop in foo) {
  console.log(prop, ":", foo[prop]);
}
