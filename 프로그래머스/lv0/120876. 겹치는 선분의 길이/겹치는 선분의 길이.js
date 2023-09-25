function solution(lines) {
    
    let cnt = 1;
    let result = {}
    
    lines.forEach(([start, end]) => {
        for(let i=start; i<end; i++) {
            if(result[i]>=1) {
                result[i]+=1
            }else {
                result[i]=1
            }
        }
        
    })
    
    return Object.entries(result).filter(([key, value]) => value > 1).length;
}