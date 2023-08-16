function solution(hp) {
    
    let general = 0 // 장군개미
    let soldier = 0 // 병정개미
    let worker = 0 // 일개미
    
    general = ~~(hp / 5)
    soldier = ~~((hp-(general*5))/3)
    worker = ~~(hp-((general*5)+(soldier*3)))
    
    return general+soldier+worker;
}