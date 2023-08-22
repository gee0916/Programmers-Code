function solution(n) {
  let num = n;
  let result = [];

  for (let i = 2; i < n; i++) {
    if (num % i === 0) {
      num = num / i;
      result[i] = i;
      --i;
    }
  }
  return result.length === 0 ? (result = [n]) : result.filter((a) => !isNaN(a));
}
