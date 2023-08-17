function factorial(num) {
    if(num<=1) {
        return num
    }
    return num * factorial(num-1)
}

function solution(balls, share) {
    return balls === share ? 1 : Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));
}