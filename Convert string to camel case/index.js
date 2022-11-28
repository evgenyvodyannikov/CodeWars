function toCamelCase(str){
  if(str)
    {
      let result = '';
      let array = '';
      
      if(str.indexOf('_') > -1)
        {
           array = str.split('_');
        }
      else if(str.indexOf('-') > -1)
        {
           array = str.split('-');
        }
      array.forEach((el) => {
        if(array.indexOf(el) != 0)
          {
              let firstCap = el.charAt(0).toUpperCase();

              let remaining = el.slice(1);

              el = firstCap + remaining;
          }
        result += el;
      });
      return result;
    }
  else
    return '';
}