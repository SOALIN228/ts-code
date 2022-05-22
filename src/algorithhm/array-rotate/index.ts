/**
 * 函数旋转k步-使用pop、unshift，复杂度O（n2），空间复杂度O（1）
 * @param arr array
 * @param k k步
 * @returns
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;

  const step = Math.abs(k % length); // abs 取绝对值，负数会返回0
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n != null) {
      arr.unshift(n);
    }
  }
  return arr;
}

/**
 * 函数旋转k步-使用concat，复杂度O（1），空间复杂度O（n）
 * @param arr array
 * @param k k步
 * @returns
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;

  const step = Math.abs(k % length); // abs 取绝对值，负数会返回0
  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const part3 = part1.concat(part2);
  return part3;
}

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const rotateArr = rotate1(arr, 3);
// console.log("rotateArr", rotateArr);

// 性能测试
// const arr1 = [];
// for (let i = 0; i < 10 * 10000; i++) {
//   arr1.push(i);
// }
// console.time("rotate1");
// rotate1(arr1, 9 * 10000);
// console.timeEnd("rotate1");

// const arr2 = [];
// for (let i = 0; i < 10 * 10000; i++) {
//   arr2.push(i);
// }
// console.time("rotate2");
// rotate2(arr2, 9 * 10000);
// console.timeEnd("rotate2");
