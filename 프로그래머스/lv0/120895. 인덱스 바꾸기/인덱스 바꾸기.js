function solution(my_string, num1, num2) {
  let arr = [...my_string];
  let change = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = change;
  return arr.join("");
}