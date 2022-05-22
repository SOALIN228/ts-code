export function switchLetterCase(str: string) {
  let res = "";
  if (str.length === 0) return res;

  let reg1 = /[a-z]/;
  let reg2 = /[A-Z]/;

  for (let s of str) {
    if (reg1.test(s)) {
      res += s.toUpperCase();
    } else if (reg2.test(s)) {
      res += s.toLowerCase();
    } else {
      res += s;
    }
  }
  return res;
}

export function switchLetterCase2(str: string) {
  let res = "";
  if (str.length === 0) return res;

  for (let s of str) {
    let code = s.charCodeAt(0); // 获取阿斯克码
    if (code >= 65 && code <= 90) {
      res += s.toLowerCase();
    } else if (code >= 97 && code <= 122) {
      res += s.toUpperCase();
    } else {
      res += s;
    }
  }
  return res;
}

// console.log(switchLetterCase2("asD"));
