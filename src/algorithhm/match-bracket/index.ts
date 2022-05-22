/**
 * 括号匹配
 * @param str 字符串,复杂度O（n），空间复杂度O（n）
 * @returns
 */
export function matchBracket(str: string): boolean {
  if (str.length % 2 === 1) return false;

  let stack = [];
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  for (let s of str) {
    if (map.has(s)) {
      stack.push(s);
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === s) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// 功能测试
// const str = "[{()}]";
// console.log(matchBracket(str));
