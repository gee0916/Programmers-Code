function solution(str1, str2) {
    
    let result = [];
    
    for(let i=0; i<str1.length; i++) {
            result[i]=str1[i]+str2[i]
    };
    
    return result.join('');
}