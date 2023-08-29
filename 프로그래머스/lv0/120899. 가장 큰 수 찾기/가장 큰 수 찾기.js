function solution(array) {
    return array=[Math.max(...array),array.indexOf(Math.max(...array))];
}