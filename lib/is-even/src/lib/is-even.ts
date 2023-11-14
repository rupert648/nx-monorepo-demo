export function isEven(x: number): boolean {
  return x % 2 === 0;
}

export function isOdd(x: number): boolean {
  return !isEven(x);
}
