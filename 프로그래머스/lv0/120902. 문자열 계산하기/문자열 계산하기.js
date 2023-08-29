function solution(my_string) {
  let arr = my_string.split(" ");
  return arr[1] === "+"
    ? Number(arr[0]) + Number(arr[2])
    : Number(arr[0]) - Number(arr[2]);
}