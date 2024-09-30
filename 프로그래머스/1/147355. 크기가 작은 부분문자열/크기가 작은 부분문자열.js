function solution(t, p) {
    
    let result = 0;
    
    for(let i=0; i < t.length; i++) {
        if( t.substr(i,p.length).length === p.length && t.substr(i,p.length) <= p) {
            result++;
        }
    }
    
    return result;
}