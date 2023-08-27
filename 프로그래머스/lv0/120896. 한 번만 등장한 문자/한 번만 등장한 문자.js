function solution(s) {
  let cnt = {};
  s.split("").forEach((a) => (cnt[a] = (cnt[a] || 0) + 1));
  return Object.keys(cnt)
    .filter((a) => cnt[a] === 1)
    .sort()
    .join("");
}
