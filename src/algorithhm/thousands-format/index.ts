export function format(n: number): string {
  const _n = Math.floor(n);
  const s = _n.toString();

  const arr = s.split("").reverse();
  return arr.reduce((prev, val, index) => {
    if (index % 3 === 0) {
      if (prev) {
        // 是否第一次进入
        return `${val},${prev}`;
      } else {
        return val;
      }
    } else {
      return val + prev;
    }
  }, "");
}

export function format2(n: number): string {
  const _n = Math.floor(n);
  let s = _n.toString();
  let res = "";

  while (s.length > 3) {
    res = "," + s.slice(-3) + res;
    s = s.slice(0, -3);
  }
  if (s.length) {
    res = s + res;
  }
  return res;
}

// const num = 1234506700;
// console.log(format2(num));
