function solution(chicken) {
    
    let order = 0;
    
    while(chicken >= 10) {
        order += parseInt(chicken/10)
        chicken=parseInt(chicken/10)+chicken%10
    }
    
    return order;
}