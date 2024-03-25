function solution(s) {
    
    let arr = s.split(' ')
    let str = '';
    
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(j%2===0) {
                str += arr[i][j].toUpperCase();
            }else {
                str += arr[i][j].toLowerCase();
            }
        }
        arr[i]=str
        str = ''
    }
    
    return arr.join(' ');
}