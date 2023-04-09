function solution(n) {
    var answer = 1;
    
    while (answer++) {
        if (n % answer == 1 ) {
            console.log (answer)
            return answer;
        }
    }
    
}