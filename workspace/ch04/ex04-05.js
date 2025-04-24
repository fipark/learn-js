

Function.prototype.memo = function(key){
  this._cache = this._cache || {};
  if(this._cache[key] !== undefined){
    return this._cache[key];
  } else {
    return this._cache[key] = this(key);
  }
}



const isPrime = function(num){
  // 소수 판별 코드
  let prime = true;
  for(let i=2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
      prime = false;
      break;
    }
  }
  return prime;
};

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.timeEnd('소요시간');
