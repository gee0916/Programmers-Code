function solution(n) {
  let result = 0;
  let cnt = 0;

  while (cnt < n) {
    cnt++;
    result++;

    if (result % 3 === 0) {
      result++;
    }

    if (String(result).includes("3")) {
      while (true) {
        result++;
        if (!String(result).includes("3")) {
          if (result % 3 === 0) {
            result++;
          }
          break;
        }
      }
    }
  }

  return result;
}