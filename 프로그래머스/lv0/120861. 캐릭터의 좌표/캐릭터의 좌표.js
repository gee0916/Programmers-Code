function solution(keyinput, board) {
    
    let [x,y] = board;
    
    let xr = Math.floor(x/2)
    let xl = -Math.floor(x/2)
    let yu = Math.floor(y/2)
    let yd = -Math.floor(y/2)
    
    let result = [0,0];
    
    keyinput.forEach((v,i) => {
        if(v==="right") {
            result[0]+=1
        }else if(v==="left") {
            result[0]-=1
        }else if(v==="up") {
            result[1]+=1
        }else if(v==="down") {
            result[1]-=1
            
        }
    result[0] > xr ? result[0]=xr : result[0]
    result[0] < xl ? result[0]=xl : result[0]
    result[1] > yu ? result[1]=yu : result[1]
    result[1] < yd ? result[1]=yd : result[1]
    })
    

    
    return result;
}