function solution(participant, completion) {
    
    let newP = new Map();
    let result = '';
    
    participant.forEach((name,_) => {
        if(newP.has(name)) {
            newP.set(name,newP.get(name)+1)
        }else {
            newP.set(name,1)
        }
    })
    
    completion.forEach((name,_) => newP.set(name,newP.get(name)-1))
    
    for(let entry of newP.entries()) {
        if(entry[1]===1){
            result=entry[0]
        }
    }
    
    return result;

}