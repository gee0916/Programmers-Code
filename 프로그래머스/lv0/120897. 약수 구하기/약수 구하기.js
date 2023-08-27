function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, i) => i + 1)
    .filter((a) => n % a === 0);
}