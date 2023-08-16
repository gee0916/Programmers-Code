function solution(emergency) {
    let line = [...emergency].sort((a,b) => b-a)

    return emergency.map((v,i) => v = line.indexOf(v)+1);
}