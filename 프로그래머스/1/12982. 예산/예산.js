function solution(d, budget) {
    
    let result = 0;
    let sum = 0;
    
    d.sort((a,b) => a-b).forEach((v) => {
        if(sum + v <= budget) {
            result++;
            sum += v
        }
    })
    
    return result;
}