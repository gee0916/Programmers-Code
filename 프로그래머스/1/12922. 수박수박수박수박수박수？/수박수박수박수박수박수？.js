function solution(n) {
    let pattern = "수박";
    return pattern.repeat(Math.floor(n / 2)) + pattern.slice(0, n % 2);
}