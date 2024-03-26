function solution(numbers) {
    
    let num = [1,2,3,4,5,6,7,8,9,0];
    
    return num.filter((v,i) => numbers.indexOf(v)===-1).reduce((a,b) => a+b);
}