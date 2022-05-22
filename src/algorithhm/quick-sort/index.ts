export function quickSort(arr: number[]): number[] {
  const length = arr.length;
  if (!length || length === 1) return arr;

  const midIndex = Math.floor(length / 2);
  const midVal = arr[midIndex];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < length; i++) {
    if (i !== midIndex) {
      const n = arr[i];
      if (n < midVal) {
        left.push(n);
      } else {
        right.push(n);
      }
    }
  }
  return [...quickSort(left), midVal, ...quickSort(right)];
}

// console.log(quickSort([1, 9, 8, 7, 2, 5]));
