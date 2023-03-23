function solution(arr) {
    var answer = 0;
    var leng = arr.length
    var sum = 0;
    
    for(var i=0; i < leng; i++) {
        sum += arr[i];
    }
    
    return answer = sum / leng;
}