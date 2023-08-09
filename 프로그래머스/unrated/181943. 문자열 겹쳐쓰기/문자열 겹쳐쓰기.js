function solution(my_string, overwrite_string, s) {
    
//     다른풀이
    // my_string.substring(0, s) + overwrite_string + my_string.substring(s+overwrite_string.length)
    
    const ms = [...my_string]
    ms.splice(s, overwrite_string.length, overwrite_string)
    return ms.join('');
    
}