function solution(num) {
    
    let result = 0;
    
    while(num > 1) {
        num%2===0 ? num=num/2 : num=num*3+1;
        result++;
        if(num===1 || result >= 500 ) {
            break;
        }
    }
    
    return result>=500? -1 : result ;
}