function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    var numer = (numer1*denom2) + (numer2*denom1)
    var denom = denom1*denom2
    
    let min=0; //최대공약수
    for(let i=1; numer<denom ? i<=numer : i<=denom; i++) {
        if(numer%i==0 && denom%i==0) {
            min = i;
        }
    }
    
    return [numer/min,denom/min];
}