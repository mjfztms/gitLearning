/* 获取随机整数 */
export function randomNum(m,n){
  var num = Math.floor(Math.random()*(m - n) + n);
  return num;
}

