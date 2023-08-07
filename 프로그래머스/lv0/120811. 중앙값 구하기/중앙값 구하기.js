function solution(array) {
    
    return array.sort((a,b)=>a-b).filter((v,i) => i == Math.floor(array.length/2))[0];
    
}