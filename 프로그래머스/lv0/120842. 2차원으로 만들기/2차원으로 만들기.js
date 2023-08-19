function solution(num_list, n) {
    let leng = num_list.length / n
    let result = []
    let num=n;
    
    for (let i=0; i < leng; i++) {
        result[i] = num_list.slice(i*n,num)
        num+=n
    }
    
    return result;
}