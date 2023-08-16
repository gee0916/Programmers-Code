function solution(age) {
    return String(age).split('').map((a) => String.fromCharCode(97+Number(a))).join('');
}