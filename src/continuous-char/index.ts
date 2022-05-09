interface IRes {
  char: string;
  length: number;
}

export function findContinuousChar(str: string): IRes {
  const res = {
    char: "",
    length: 0,
  };
  if (str.length === 0) return res;
  let maxLen = 0; //记录最大长度
  for (let i = 0; i < str.length; i++) {
    maxLen = 0; // 重制
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) {
        maxLen++;
      }
      // 出现不同，或到了结尾
      if (str[i] !== str[j] || j === str.length - 1) {
        if (maxLen > res.length) {
          res.char = str[i];
          res.length = maxLen;
        }

        // 未到结尾，因为break掉后，i++还是会执行，所以下面两步都需要-1
        if (i < str.length - 1) {
          i = j - 1;
        }

        break;
      }
    }
  }
  return res;
}

export function findContinuousChar2(str: string): IRes {
  const res = {
    char: "",
    length: 0,
  };
  if (str.length === 0) return res;
  let maxLen = 0; //记录最大长度
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[j]) {
      maxLen++;
    }
    if (str[i] !== str[j] || i === str.length - 1) {
      if (maxLen > res.length) {
        res.char = str[j];
        res.length = maxLen;
      }
      maxLen = 0;
      // 未到结尾，因为i++还未执行，所以下面两步都需要-1
      if (i < str.length - 1) {
        j = i;
        i--;
      }
    }
  }
  return res;
}

// const str = "aabbccc1233";
// console.log(findContinuousChar2(str));
