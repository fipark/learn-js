const todoList = [
  {
    "id": 1,
    "title": "JavaScript 공부",
    "done": true
  },
  {
    "id": 2,
    "title": "TypeScript 공부",
    "done": false
  },
  {
    "id": 3,
    "title": "JavaScript 프로젝트",
    "done": false
  },
  {
    "id": 4,
    "title": "React 공부",
    "done": false
  },
  {
    "id": 5,
    "title": "Final 프로젝트",
    "done": true
  }
];

let doneList = [];
let remainList = [];
let remainCount = 0;
let todo = null;
let todoIndex = -1;
let hasTodo = false;
let isAllDone = true;

for(let i=0; i<todoList.length; i++){
  let list = todoList[i];
  if(list.done === true){
    doneList.push(list.title)
  } else {remainList.push(list.title)
    remainCount++;
    isAllDone = false

  }
  if(list.id === 2){
    todo = list.title;
  }
  if(list.id === 3){
    todoIndex = i;
  }

  hasTodo = remainCount > 0;

}








// 완료된 할일 목록
console.log('완료된 할일 목록', doneList);
// 남은 할일 목록
console.log('남은 할일 목록', remainList);
// 남은 할일 수
console.log('남은 할일 수', remainCount);
// id=2인 할일
console.log('id=2인 할일', todo);
// id=3인 할일의 index
console.log('id=3인 할일의 index', todoIndex);
// 남은 할일이 하나라도 있는가?
console.log('남은 할일이 하나라도 있는가?', hasTodo);
// 할일이 모두 완료 되었는가?
console.log('할일이 모두 완료 되었는가?', isAllDone);