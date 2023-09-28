function solution(id_pw, db) {
  let result = "";

  db.forEach((v) =>
    v[0] !== id_pw[0]
      ? v[1] !== id_pw[1]
        ? (result = "fail")
        : (result = "wrong pw")
      : v[1] !== id_pw[1]
      ? (result = "wrong pw")
      : (result = "login")
  );

  return result;
}