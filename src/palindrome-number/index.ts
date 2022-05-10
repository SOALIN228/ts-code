export function findPalindromeNumber(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let s = i.toString();
    if (s === s.split("").reverse().join("")) {
      res.push(i);
    }
  }

  return res;
}

export function findPalindromeNumber2(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let s = i.toString();

    let flag = true;
    let startIndex = 0;
    let endIndex = s.length - 1;
    while (startIndex < endIndex) {
      if (s[startIndex] !== s[endIndex]) {
        flag = false;
        break;
      } else {
        startIndex++;
        endIndex--;
      }
    }

    if (flag) res.push(i);
  }

  return res;
}

export function findPalindromeNumber3(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0;

    while (n > 0) {
      rev = rev * 10 + (n % 10); // 取出最后一位数
      n = Math.floor(n / 10); // 去掉最后以为数
    }

    if (i === rev) res.push(i);
  }

  return res;
}

// console.log(findPalindromeNumber3(200));
