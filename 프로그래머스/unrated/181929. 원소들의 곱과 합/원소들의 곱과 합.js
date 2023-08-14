function solution(num_list) {
    let mul = 0;
    let x = 0;
    
    mul = num_list.reduce((a,b) => a*b)
    x = num_list.reduce((a,b) => a+b)**2
    
    return mul>x ? 0 : 1;
}