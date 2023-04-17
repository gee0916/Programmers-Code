function solution(s) {
    var answer = '';
    
    var test = s.trim().split(" ")
    
    console.log(Math.min(...test)+" "+Math.max(...test))
    
    answer = Math.min(...test)+" "+Math.max(...test)
        
    return answer;
}