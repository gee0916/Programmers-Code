function solution(s) {
    return s.split('').sort((a,b) => a.toLowerCase()>b.toLowerCase() ? 1:-1).sort().reverse().join('');
}