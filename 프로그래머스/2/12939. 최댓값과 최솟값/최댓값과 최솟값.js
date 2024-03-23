function solution(s) {
    let answer = '';
    
    let test = s.split(" ")
    answer = Math.min(...test)+" "+Math.max(...test)
        
    return answer;
}