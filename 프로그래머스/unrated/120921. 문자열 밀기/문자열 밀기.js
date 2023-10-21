function solution(A, B) {
    
    let cnt = 0;
    
    while(cnt <= B.length) {
       if (A === B) {
            break;
        }
       let str = A[A.length-1]
       A = str + A.substr(0,A.length-1)
        console.log(A)
        cnt++;
    }
    
    return cnt <= B.length ? cnt : -1;
}