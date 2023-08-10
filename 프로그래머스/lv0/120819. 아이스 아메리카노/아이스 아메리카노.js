function solution(money) {
    
    const result = [parseInt(money/5500), money%5500]
    
    return result;
}