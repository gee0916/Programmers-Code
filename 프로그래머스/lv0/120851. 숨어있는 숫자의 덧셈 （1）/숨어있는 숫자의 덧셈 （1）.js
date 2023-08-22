function solution(my_string) {
  let result = [...my_string]
    .map(Number)
    .filter((a) => (a === 0 ? true : a))
    .reduce((a, b) => a + b);
  return result;
}
