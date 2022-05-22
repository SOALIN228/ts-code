export function flatten(arr: any[]): any[] {
  let res: any[] = [];
  arr.forEach((item) => {
    res = res.concat(item); // concat 可以拍平1级数组，多级数组会存在问题
  });
  return res;
}

// const arr = [1, 2, [3, [4], 5], 6];
// console.log(flatten(arr));

export function flattenDeep(arr: any[]): any[] {
  let res: any[] = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const flatItem = flattenDeep(item)
      res = res.concat(flatItem)
    } else {
      res = res.concat(item);
    }
  });
  return res;
}

// const arr = [1, 2, [3, [4], 5], 6];
// console.log(flattenDeep(arr)); // [1, 2, 3, 4, 5, 6]