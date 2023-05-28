export function textCutter(text = '', length = 10) {
  let result = text.split('').slice(0, length).join('');
  if (result.length >= length) {
    result = result + '...';
  }
  
  return result;
}
