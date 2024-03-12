function solution(arr)
{
    
    let result = [];
    arr.map((v,i) => {
        if(v!==arr[i+1]) {
            result.push(v)
        }
    })
    
    return result;
}