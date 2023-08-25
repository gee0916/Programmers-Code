function solution(order) {
  const result = String(order)
    .split("")
    .filter((a) => a % 3 === 0 && a!=="0");
  return result.length === 0 ? 0 : result.length;
}
