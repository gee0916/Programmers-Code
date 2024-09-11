function solution(price, money, count) {
    
    let result = 0;
    
    for(let i=1; i <= count; i++) {
        result+=price*i;
        console.log(result, price)
    }
    
    result = result-money;
    
    return result > 0 ? result: 0;
}