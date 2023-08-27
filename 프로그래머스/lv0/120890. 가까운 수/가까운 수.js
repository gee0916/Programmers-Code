function solution(array, n) {
  return array
    .sort()
    .filter(
      (a) =>
        Math.abs(a - n) ===
          array.map((a) => Math.abs(a - n)).sort((a, b) => a - b)[0] ||
        a - n === 0
    )[0];
}