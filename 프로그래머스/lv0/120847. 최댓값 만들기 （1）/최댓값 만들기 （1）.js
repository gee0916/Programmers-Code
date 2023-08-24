function solution(numbers) {
  return numbers
        .sort((a, b) => b - a)
        .splice(0,2)
        .reduce((a, b) => a * b);
}
