function solution(my_string) {
  let result = [...my_string]
    .map(Number)
    .filter((a) => (a === 0 ? true : a))
    .sort((a, b) => a - b);
  return result;
}
