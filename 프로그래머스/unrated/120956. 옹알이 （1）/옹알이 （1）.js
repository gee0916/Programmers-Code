function solution(babbling) {
  return babbling
    .map((v) => v.replaceAll(/(aya|ye|woo|ma)/g, ""))
    .filter((v) => v === "").length;
}