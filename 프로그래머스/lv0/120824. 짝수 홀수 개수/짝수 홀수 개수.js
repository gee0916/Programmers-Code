function solution(num_list) {
    let even = 0; //짝수
    let odd = 0; //홀수
    
    num_list.forEach((a) => a%2===0? ++even: ++odd)
    num_list = [even,odd]
    
    return num_list;
}