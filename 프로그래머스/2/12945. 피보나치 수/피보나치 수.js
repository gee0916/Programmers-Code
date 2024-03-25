function solution(n) {
    let arr = new Array(n);

    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;

    for(let i=3; i<=n; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567;
    }

    return arr[n];
}