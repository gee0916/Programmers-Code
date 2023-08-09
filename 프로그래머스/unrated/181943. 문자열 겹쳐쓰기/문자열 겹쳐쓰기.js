function solution(my_string, overwrite_string, s) {
    
    const ms = [...my_string]
    ms.splice(s, overwrite_string.length, overwrite_string)
    return ms.join('');
    
}