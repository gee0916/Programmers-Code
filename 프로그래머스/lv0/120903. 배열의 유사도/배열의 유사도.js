function solution(s1, s2) {
    return s1.map((a) => s2.includes(a)).filter((a) => a===true).length;
}