function solution(s) {
    let cnt = 0; 
    let length = 0;
    let result = [0,0];
    
    while(s!=1) {
        let slen = s.length;
        s = s.split('0').join('');
        length += slen - s.length;
        s = s.length.toString(2);
        cnt++;
    }
    
    return [cnt, length];
}