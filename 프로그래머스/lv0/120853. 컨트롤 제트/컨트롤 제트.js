function solution(s) {
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      arr.splice(i, 1);
      arr.splice(i - 1, 1);
      i = 0;
    }
  }

  return arr.length === 0 ? 0 : arr.map(Number).reduce((a, b) => a + b);
}
