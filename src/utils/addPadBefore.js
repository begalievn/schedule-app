export function addPadBefore(element, symbol, quantity) {
  let remainedQuantity = quantity - String(element).length;
  if(String(element).length >= quantity) return element;
  let result = String(element);
  while(remainedQuantity) {
    result = `${symbol}${result}`;
    remainedQuantity--;
  }
  return result;
}
