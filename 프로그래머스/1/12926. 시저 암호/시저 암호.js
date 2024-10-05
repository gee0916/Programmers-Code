function solution(s, n) {
    
    s = s.split('').map((v) => {
        if(v !== " "){
            if((v.charCodeAt()+n>90) && v.charCodeAt() <= 90){
            return String.fromCharCode(64+((v.charCodeAt()+n)-90))
            }else if(v.charCodeAt()+n>122) {
                return String.fromCharCode(96+((v.charCodeAt()+n)-122))
            }else {
                return String.fromCharCode(v.charCodeAt()+n)
            }
        }else {
            return v
        }
    }).join("")
    
    return s;
}