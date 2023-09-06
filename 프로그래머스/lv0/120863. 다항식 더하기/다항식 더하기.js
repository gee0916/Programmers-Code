function solution(polynomial) {
    
    let xSum = 0;
    let numSum = 0;
    
    polynomial.split(' + ').forEach((v,i) => {
        if(v.endsWith('x')) {
            let replace = Number(v.replace('x',''))
            xSum += (replace === 0 ? 1 : replace)
        }else {
            numSum += Number(v)
        }
    })
    
    xSum === 1 ? xSum="" : xSum
    
    return (xSum === 0 ? "" : xSum+"x")+(xSum !== 0 && numSum !== 0? " + " : "")+(numSum === 0 ? "" :numSum);
}