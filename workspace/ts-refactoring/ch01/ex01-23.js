/*
new Object() - 생성자 함수로 객체 생성
*/
const foo = new Object();
foo.name = "함수명";
foo["age"] = 6;
foo.job = "마법사";
foo["married"] = false;
console.log(foo["name"], foo["age"], foo["job"], foo["married"]);
console.log(typeof foo, foo);
