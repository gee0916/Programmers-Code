function solution(n) {
    return Array(n)
            .fill()
            .map((v,i)=> i+1)
            .filter((v,i) => v % 2 !==0);
}