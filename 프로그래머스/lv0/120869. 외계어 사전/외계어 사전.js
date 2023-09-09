function solution(spell, dic) {
    
    let spellNum=0;
    let result=2;
    
    dic.forEach((a) => {
      spell.forEach((b) => {
            if(a.includes(b)) {
                spellNum+=1
            }
        })
        
        if(spellNum===spell.length) {
            result = 1;
        }
        
        spellNum=0
    })
    
    return result;
}