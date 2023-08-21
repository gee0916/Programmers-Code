function solution(numbers) {
  return numbers.length > 2
    ? numbers
        .sort((a, b) => b - a)
        .splice(0,2)
        .reduce((a, b) => a * b)
    : numbers.reduce((a, b) => a * b);
}
