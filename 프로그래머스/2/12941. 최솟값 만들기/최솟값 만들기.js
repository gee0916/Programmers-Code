function solution(A,B){
    
    let result = A;
    
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    for(let i = 0; i<A.length; i++) {
        result[i] = A[i]*B[i]
    }
    
    return result.reduce((a,b) => a+b);
}