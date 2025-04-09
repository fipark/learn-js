/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을수 있을까?
*/
let count = 1;
let day = 1;
let sum = 0;

while (sum < 10000000) {
  sum += count;
  count = 2 * count;
  day++;
}

console.log(
  `${
    day - 1
  }일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을수 있겠군.`
);

while (day <= 30) {
  sum += count;
  day++;
  count = 2 * count;
}
console.log(
  `${
    day - 1
  }일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을수 있겠군.`
);
