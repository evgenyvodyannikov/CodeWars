function digPow(n, p){
 
  let array = Array.from(String(n), Number);

  let degree = 0;
  let value = 0;
  
  array.forEach((el) => {
    value += Math.pow(el, p + degree);
    degree++;
  });
  
  k = value / n;
  
  result = Number.isInteger(k) ? k : -1;

  return result;
}