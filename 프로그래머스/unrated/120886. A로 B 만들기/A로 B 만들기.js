function solution(before, after) {
  let newBefore = before.split("").sort();
  let newAfter = after.split("").sort();

  return newBefore.map((v, i) => v === newAfter[i]).filter((v) => v === true)
    .length === after.length
    ? 1
    : 0;
}