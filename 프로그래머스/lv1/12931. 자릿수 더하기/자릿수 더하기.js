function solution(n)
{
    var answer = 0;
    var leng = n.toString().length;
    var num = 0;
    
    for(var i=0; i < leng; i++) {
        num = n.toString().substring(i,i+1); // 숫자를 문자로 변환해서 자르기
        answer += Number(num); // 다시 문자를 숫자로
    }

    return answer;
}