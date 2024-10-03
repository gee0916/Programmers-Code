function solution(n) {
    
    let nCnt = 0;
    let rCnt = 0;
    
   nCnt = n.toString(2).split('0').join('').length;
    
    while (true) {
        if(nCnt===rCnt) {
            return n;
        }
        n++;
        rCnt = n.toString(2).split('0').join('').length;
    }
    
}