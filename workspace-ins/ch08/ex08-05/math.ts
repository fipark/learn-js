export function plus(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

export function minus(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

function multiply(a: number, b: number) {
  console.log(`${a} * ${b} = ${a * b}`);
  return a * b;
}

type Member = {
  name: string;
  age: number;
}

