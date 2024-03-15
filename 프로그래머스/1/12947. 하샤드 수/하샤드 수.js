function solution(x) {
    
    let num = x.toString().split('').map((num) => Number(num)).reduce((a,b) =>a+b)
    
    return x%num===0? true : false;
}