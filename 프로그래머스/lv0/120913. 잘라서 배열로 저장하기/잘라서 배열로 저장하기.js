function solution(my_str, n) {
  let arr = [...my_str];
  let result = [];
    
    for(let i=0; ; i++) {
        if(arr.length===0) {
            return result;
        }
        result[i] = arr.splice(0, n).join("")
    }
}