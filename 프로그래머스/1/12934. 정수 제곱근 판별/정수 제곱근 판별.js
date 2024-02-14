function solution(n) {
    
    let result = Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n)+1 : -1
    
    return result === -1 ? result : Math.pow(result,2);
}