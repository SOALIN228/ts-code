export function fibonacci(n: number) {
  if (n <= 2) return n;
  let f1 = 1,
    f2 = 2,
    f3 = 3;
  for (let i = 3; i <= n; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
}


// console.log(fibonacci(5));
