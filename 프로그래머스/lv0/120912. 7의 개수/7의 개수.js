function solution(array) {
  let num = 0;
  return array
    .join("")
    .split("")
    .filter((a) => a === "7").length;
}