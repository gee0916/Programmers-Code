function solution(s) {
    
    let arr = {}
    
    
     s.replaceAll(/"|{|}/g,"").split(",").forEach((v,i)=>{
         if(!arr[v]){
             arr[v] = 0
         }
         arr[v] += 1
    })
    
    let newArr = Object.entries(arr).sort((a,b)=> b[1]-a[1]);
    let result = []
    
    for(const key of newArr) {
        result.push(Number(key[0]))
    }

    return result;
}