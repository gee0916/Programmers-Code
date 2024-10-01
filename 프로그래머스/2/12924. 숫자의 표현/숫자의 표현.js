function solution(n) {

    let result = 0;
    let cnt = 1;
    let sum = 1;
    
    while(true) {
        
        if((n-sum)%cnt === 0) {
            result++ ;
        }
        
        if(cnt === n || (n-sum) <= 0) return result;
        
        cnt++;
        sum+=cnt;
        
    }
}