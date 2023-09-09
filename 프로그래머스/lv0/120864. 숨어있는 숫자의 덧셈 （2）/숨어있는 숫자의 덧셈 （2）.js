function solution(my_string) {
  return my_string
    .replaceAll(/[a-zA-Z]/g, " ")
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b);
}