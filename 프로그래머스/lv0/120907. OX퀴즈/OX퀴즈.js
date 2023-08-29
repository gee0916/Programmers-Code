function solution(quiz) {
    
    let result=[];
    
    for(let i=0; i<quiz.length; i++) {
        let arr = quiz[i].split(' ') 
            if(arr[1]==="+") {
                if(Number(arr[0])+Number(arr[2]) === Number(arr[4])) {
                    result[i]="O"
                }else {
                    result[i]="X"
                }
            }else if(arr[1]==="-"){
                 if(Number(arr[0])-Number(arr[2]) === Number(arr[4])) {
                    result[i]="O"
                }else {
                    result[i]="X"
                }
            }
    }
    return result
}