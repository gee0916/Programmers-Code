function solution(numbers) {
    
    let result;
    
    numbers.forEach((a,ai) => {
        numbers.forEach((b,bi) => {
            if(ai!==bi) {
        result >= a * b ? result : (result = a * b);
        }
      })
    })
    
    return result;
}