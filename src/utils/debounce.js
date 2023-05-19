export function debounce(fn, t = 400) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  }
}
