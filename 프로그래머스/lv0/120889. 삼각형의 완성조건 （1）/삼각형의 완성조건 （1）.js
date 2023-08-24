function solution(sides) {
  const set = new Set(sides);
  const max = Math.max(...sides);
  sides.splice(sides.indexOf(max), 1);

  return set.size === 1 ? 1 : max >= sides.reduce((a, b) => a + b) ? 2 : 1;
}