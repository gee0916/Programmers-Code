function solution(num, total) {
    
//     1부터 m까지의 자연수의 합을 구하는공식은 아래와 같습니다.
// (n * (n + 1)) / 2 == total

// 자 그렇다면 도출해내야하는 리스트의 마지막 원소가 m일텐데 위 공식을 이용하여 아래와 같이 도출해낼수있습니다.
// m == (((total * 2) / n) + n - 1) / 2
    
    let lastNum =0;
    let startNum = 0;
    let result = [];
    let cnt = 0;
    
    lastNum = (((total * 2) / num) + num - 1) / 2
    startNum = lastNum-num+1
    
    for(let i = startNum; i <= lastNum; i++) {
        result[cnt++] = i
    }

    return result;
}