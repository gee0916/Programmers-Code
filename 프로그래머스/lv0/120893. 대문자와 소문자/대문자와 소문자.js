function solution(my_string) {
  return [...my_string]
    .map((a) =>
      a === a.toUpperCase() ? (a = a.toLowerCase()) : (a = a.toUpperCase())
    )
    .join("");
}