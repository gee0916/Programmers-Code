function solution(array) {
  let cnt = {};
  let maxCnt = 0;
  let result = 0;

  array.forEach((x) => {
      if(!cnt[x]) {
          cnt[x]=1;
      }else {
          cnt[x]+=1
      }
  });

   // cnt[x] = (cnt[x] || 0) + 1;
    
  maxCnt = Math.max(...Object.values(cnt));
  result = Object.keys(cnt).filter((x) => cnt[x] === maxCnt);
    result = result.length === 1 ? parseInt(result) : -1

  return result;
}
