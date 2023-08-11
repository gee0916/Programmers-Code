function solution(a, b) {

    let abNum = Number(a.toString()+b.toString())
    let baNum = Number(b.toString()+a.toString())
    
    let result= abNum >= baNum? abNum : baNum
    
    return Number(result);
}