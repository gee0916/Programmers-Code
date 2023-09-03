function solution(n, t) {
    
    let cnt = 1
    let result = n
    
    while(cnt <= t) {
        result*=2
        cnt++
    }
    
    return result;
}