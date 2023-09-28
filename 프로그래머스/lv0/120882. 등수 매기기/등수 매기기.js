function solution(score) {
    
    let result = []
    let idx = []
    
    score.forEach((v, i) => result[i]=v.reduce((a,b)=> (a+b)/2))
    
    idx = [...result].sort((a,b) => b-a)
    
    return result.map((v,i) => v=idx.indexOf(v)+1);
}