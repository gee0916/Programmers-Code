function solution(num, k) {
    return String(num).indexOf(k)===-1? -1 : String(num).indexOf(k)+1;
}