function solution(code) {
    
    let mode = 0;
    let ret = "";
    
    [...code].forEach((a,i) => {
        if(a==="1"){
            mode = mode === 0 ? 1 : 0;
        }
        
        if(mode===1) {
            if(a!=="1"){
                ret+= i%2!==0? a : "";
            }
        }else {
            if(a!=="1"){
                ret+= i%2===0? a : "";
            }
        }
    })
    
    return ret ? ret : "EMPTY";
}