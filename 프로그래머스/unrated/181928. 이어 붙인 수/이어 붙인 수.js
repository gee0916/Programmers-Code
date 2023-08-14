function solution(num_list) {
    let even = num_list.filter((a) => a%2===0).join('') //짝수
    
    let odd = num_list.filter((a) => a%2!==0).join('') //홀수

    return Number(even)+Number(odd);
}