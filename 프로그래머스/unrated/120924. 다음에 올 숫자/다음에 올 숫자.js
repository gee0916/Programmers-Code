function solution(common) {
    
    let result =0;
    
    if ((common[1]-common[0])===(common[2]-common[1])) {
        
        let num = common[1]-common[0]
        result = common.pop()+num
        
    }else {
        
        let num = common[1]/common[0]
        result = common.pop()*num
    }
    
    return result;
}