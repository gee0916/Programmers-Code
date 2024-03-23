function solution(s) {
    
    let arr = s.toLowerCase().split(' ')
    
    let result = arr.map((str) => {
                    if(isNaN(str[0])){
                        return str.charAt(0).toUpperCase().toUpperCase() + str.slice(1).toLowerCase();
                    }else {
                        return str;
                    }
                 })

    return result.join(' ');
}