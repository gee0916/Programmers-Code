function solution(s) {
    
    let bol = true;
    
    if(s.includes('e')) {
        bol = false;
    }else if(s.length === 4 || s.length === 6) {
        bol = !isNaN(Number(s));
    }else {
        bol = false;
    }
    
    return bol;
}