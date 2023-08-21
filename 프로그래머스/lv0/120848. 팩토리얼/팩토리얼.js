function factorial(num) {
  if (num <= 1) {
    return num;
  }
  return num * factorial(num - 1);
}

function solution(n) {
  let result = 0;
  for (;;) {
    result++;
    if (factorial(result) > n) {
      return --result;
    }
    factorial(result);
  }
}