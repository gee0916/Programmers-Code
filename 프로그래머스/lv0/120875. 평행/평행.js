function solution(dots) {
    
    let slope1 = 0;
    let slope2 = 0;
    let result = 0;
    
    // 두 직선이 평행하려면 
    // slope1 = (y2 - y1) / (x2 - x1)
    // slope2 = (y4 - y3) / (x4 - x3)
    // slope1===slope2
    // 주어진 네 개의 점을 이용하여 두 개씩 직선을 만들고, 각 직선의 기울기를 계산하여 비교
    
    // 1. 1번 2번, 3번 4번
    slope1 = (dots[1][1] - dots[0][1]) / (dots[1][0] - dots[0][0])
    slope2 = (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0])
    
    slope1===slope2 ? result = 1 : ''
    
    // 2. 1번 3번, 2번 4번
    slope1 = (dots[2][1] - dots[0][1]) / (dots[2][0] - dots[0][0])
    slope2 = (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0])
    
    slope1===slope2 ? result = 1 : ''
    
    // 3. 1번 4번, 2번 3번
    slope1 = (dots[3][1] - dots[0][1]) / (dots[3][0] - dots[0][0])
    slope2 = (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])
    
    slope1===slope2 ? result = 1 : ''
    
    return result;
}