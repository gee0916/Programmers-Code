function solution(my_string, letter) {
  let result = [...my_string].filter((v) => v !== letter).join("");
  return result;
}
