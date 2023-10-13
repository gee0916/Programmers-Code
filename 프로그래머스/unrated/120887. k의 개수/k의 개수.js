function solution(i, j, k) {
  let arr = [];
  let cnt = 0;

  for (let num = i; num <= j; num++) {
    if (String(num).includes(k)) {
      arr[cnt++] = num;
    }
  }

  return arr
    .join("")
    .split("")
    .filter((v) => v === String(k)).length;
}