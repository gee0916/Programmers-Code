function solution(sides) {
    
    let [a,b] = sides.sort((a,b) => b-a);
    let c = 1 ;
    let result = 0;
    
    // 이미 긴 변을 가지고 있는 경우
    // a가 나머지 변의 합보다 큰 경우까지만
    while (a >= a-b+c) {
        c++
        result+=1
    }
    
    // 나머지 한 변이 긴 변인 경우
    c=1
    while (a+c < a+b) {
        c++
        result+=1
    }
    
    
    return result;
}