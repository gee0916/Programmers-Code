function solution(a, b, c) {
    
    let result = 0;
    
    result = a===b && b===c ? (a + b + c)*(a**2 + b**2 + c**2 )*(a**3 + b**3 + c**3 ) : a===b || b===c || a===c ? (a + b + c) * (a**2 + b**2 + c**2 ) : a+b+c
        
    return result;
}