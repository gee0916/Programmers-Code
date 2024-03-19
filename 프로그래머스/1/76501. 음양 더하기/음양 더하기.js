function solution(absolutes, signs) {
    return absolutes.map((v,i)=> signs[i]==1 ? v : v=v*-1).reduce((a,b)=>a+b);
}