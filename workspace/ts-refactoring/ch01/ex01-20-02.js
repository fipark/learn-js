let sum = 0;
let i = 1;
while (i <= 10) {
  if (i % 2 == 0) {
    sum += i;
  }
  i++;
}

while (i <= 10) {
  if (i % 2 == 1) {
    sum += i;
  }
  i++;
}
console.log(sum);
