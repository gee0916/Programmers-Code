function solution(survey, choices) {
    
    let table = {
        "R":0,
        "T":0,
        "C":0,
        "F":0,
        "J":0,
        "M":0,
        "A":0,
        "N":0
    }
    let newTable=[];
    let result = "";
    
    survey.forEach((v,i) => {
        if(choices[i]>4) {
            choices[i]=choices[i]-4
            table[v.split('').pop()]+=choices[i]
        }else if(choices[i]<4){
            choices[i] = choices[i]===3?1:choices[i]===1?3:2
            table[v.split('').shift()]+=choices[i]
        }
    })
    
    for(const entry of Object.entries(table)) {
        newTable.push(entry)
    }
    
    for(let i=0; i<8; i+=2) {
        if(newTable[i][1]>=newTable[i+1][1]){
            result+=newTable[i][0]
        }else {
            result+=newTable[i+1][0]
        }
    }
    
    
    return result;
}