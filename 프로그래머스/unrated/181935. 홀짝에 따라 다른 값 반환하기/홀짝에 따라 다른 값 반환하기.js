function solution(n) {
    let result=0;
    
    if(n%2!==0) {
       result=Array(n).fill(0).map((_,i) => i+1).filter((a) =>a%2!==0).reduce((a,b)=>a+b,0)
    }else {
        result=Array(n).fill(0).map((_,i) => (i+1)**2).filter((a) =>a%2===0).reduce((a,b)=>a+b,0)
    }
    
    return result;
}