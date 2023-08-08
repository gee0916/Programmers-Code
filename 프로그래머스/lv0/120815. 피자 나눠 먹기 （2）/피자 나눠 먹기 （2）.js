function solution(n) {
    let lcm=0;
    
    while(true) {
        lcm++;
        if( n * lcm % 6 === 0)  {
             n =  n * lcm
            break; 
        }
    }    
       
  return n / 6;
}