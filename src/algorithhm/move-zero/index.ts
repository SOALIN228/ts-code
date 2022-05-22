export function moveZero(arr: number[]): number[] {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

// console.log(moveZero([0, 0, 1, 2, 0, 4]));
