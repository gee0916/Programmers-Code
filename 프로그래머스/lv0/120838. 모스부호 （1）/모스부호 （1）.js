function solution(letter) {
    
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let key = {};
    
    code.map((a,b) => {
        for(let i=0; i<letter.length; i++) {
            key[a] = String.fromCharCode(97+b)
        }
    })
    
    let result = letter.split(' ').map((a,b) => a = key[a])
    
    return result.join('');
}